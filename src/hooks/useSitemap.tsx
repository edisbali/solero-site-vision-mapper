
import { useCallback, useEffect, useRef, useState } from "react";
import cytoscape from "cytoscape";
import { SitemapData, SitemapNode, SitemapEdge, getStatusColor, initialSitemapData } from "@/lib/sitemapData";

const STORAGE_KEY = "solero-sitemap-data";

export const useSitemap = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cyRef = useRef<cytoscape.Core | null>(null);
  const [sitemapData, setSitemapData] = useState<SitemapData>(initialSitemapData);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // Load data from localStorage on initial render
  useEffect(() => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setSitemapData(parsedData);
      }
    } catch (error) {
      console.error("Error loading sitemap data from localStorage:", error);
    }
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sitemapData));
    } catch (error) {
      console.error("Error saving sitemap data to localStorage:", error);
    }
  }, [sitemapData]);

  const initCytoscape = useCallback(() => {
    if (!containerRef.current) return;
    
    const cy = cytoscape({
      container: containerRef.current,
      style: [
        {
          selector: "node",
          style: {
            "label": "data(label)",
            "text-valign": "center",
            "color": "#fff",
            "font-size": "14px",
            "text-outline-width": 2,
            "text-outline-color": "#000",
            "width": 40,
            "height": 40,
            "background-color": "data(color)",
            "text-max-width": "80px",
            "text-wrap": "wrap",
            "text-overflow-wrap": "anywhere",
            "text-justification": "center",
          },
        },
        {
          selector: "edge",
          style: {
            "width": 2,
            "line-color": "#bbb",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
          },
        },
        {
          selector: "node:selected",
          style: {
            "border-width": 3,
            "border-color": "#ff0092",
            "box-shadow": "0 0 10px 2px #ff0092",
          },
        },
      ],
      elements: {
        nodes: sitemapData.nodes.map((node) => ({
          data: {
            id: node.id,
            label: node.label,
            color: node.color || getStatusColor(node.status),
            status: node.status,
            description: node.description || "",
          },
          position: node.x && node.y ? { x: node.x, y: node.y } : undefined,
          grabbable: true,
        })),
        edges: sitemapData.edges.map((edge) => ({
          data: {
            source: edge.source,
            target: edge.target,
          },
        })),
      },
      layout: {
        name: "cose",
        animate: true,
        animationDuration: 800,
        randomize: true,
      },
    });

    // Save node positions when dragged
    cy.on("dragfree", "node", (event) => {
      const node = event.target;
      const nodeId = node.id();
      const position = node.position();
      
      setSitemapData((prev) => ({
        ...prev,
        nodes: prev.nodes.map((n) =>
          n.id === nodeId ? { ...n, x: position.x, y: position.y } : n
        ),
      }));
    });

    // Handle node selection
    cy.on("tap", "node", (event) => {
      const nodeId = event.target.id();
      setSelectedNode(nodeId);
    });

    cy.on("tap", (event) => {
      if (event.target === cy) {
        setSelectedNode(null);
      }
    });

    cyRef.current = cy;
    
    return cy;
  }, [sitemapData]);

  useEffect(() => {
    const cy = initCytoscape();
    return () => {
      if (cyRef.current) {
        cyRef.current.destroy();
        cyRef.current = null;
      }
    };
  }, [initCytoscape]);

  const addNode = useCallback((node: SitemapNode, connections: string[]) => {
    setSitemapData((prev) => {
      const newNodes = [...prev.nodes, node];
      const newEdges = [
        ...prev.edges,
        ...connections.map((targetId) => ({
          source: node.id,
          target: targetId,
        })),
      ];
      
      return { nodes: newNodes, edges: newEdges };
    });
  }, []);

  const updateNode = useCallback((nodeId: string, updates: Partial<SitemapNode>, newConnections: string[]) => {
    setSitemapData((prev) => {
      // First, remove all existing edges connected to this node
      const filteredEdges = prev.edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      );
      
      // Create new edges from the selected connections
      const newEdges = [
        ...filteredEdges,
        ...newConnections.map((targetId) => ({
          source: nodeId,
          target: targetId,
        })),
      ];
      
      return {
        nodes: prev.nodes.map((node) =>
          node.id === nodeId ? { ...node, ...updates } : node
        ),
        edges: newEdges,
      };
    });
  }, []);

  const deleteNode = useCallback((nodeId: string) => {
    setSitemapData((prev) => ({
      nodes: prev.nodes.filter((node) => node.id !== nodeId),
      edges: prev.edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      ),
    }));
    
    if (selectedNode === nodeId) {
      setSelectedNode(null);
    }
  }, [selectedNode]);

  const getSelectedNode = useCallback(() => {
    if (!selectedNode) return null;
    return sitemapData.nodes.find((node) => node.id === selectedNode) || null;
  }, [selectedNode, sitemapData.nodes]);

  const getConnectedNodes = useCallback((nodeId: string) => {
    return sitemapData.edges
      .filter((edge) => edge.source === nodeId || edge.target === nodeId)
      .map((edge) => (edge.source === nodeId ? edge.target : edge.source));
  }, [sitemapData.edges]);

  const resetSitemap = useCallback(() => {
    setSitemapData(initialSitemapData);
    setSelectedNode(null);
  }, []);

  return {
    containerRef,
    sitemapData,
    selectedNode,
    setSelectedNode,
    addNode,
    updateNode,
    deleteNode,
    getSelectedNode,
    getConnectedNodes,
    resetSitemap,
  };
};
