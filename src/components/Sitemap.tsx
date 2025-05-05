
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useSitemap } from "@/hooks/useSitemap";
import { DEFAULT_NODE_COLORS, SitemapNode } from "@/lib/sitemapData";
import { Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Sitemap = () => {
  const {
    containerRef,
    sitemapData,
    selectedNode,
    addNode,
    updateNode,
    deleteNode,
    getSelectedNode,
    getConnectedNodes,
    resetSitemap,
    saveToSupabase,
    isLoading
  } = useSitemap();

  const { toast } = useToast();
  const [newNodeForm, setNewNodeForm] = useState({
    id: "",
    label: "",
    status: "existing" as "existing" | "new" | "removing",
    description: "",
    color: "",
  });

  const [editNodeForm, setEditNodeForm] = useState({
    id: "",
    label: "",
    status: "existing" as "existing" | "new" | "removing",
    description: "",
    color: "",
  });

  const [selectedConnections, setSelectedConnections] = useState<string[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleNewNodeSubmit = () => {
    if (!newNodeForm.id || !newNodeForm.label) return;

    const newNode: SitemapNode = {
      id: newNodeForm.id,
      label: newNodeForm.label,
      status: newNodeForm.status,
      description: newNodeForm.description,
      color: newNodeForm.color || DEFAULT_NODE_COLORS[newNodeForm.status],
    };

    addNode(newNode, selectedConnections);

    // Reset form
    setNewNodeForm({
      id: "",
      label: "",
      status: "existing",
      description: "",
      color: "",
    });
    setSelectedConnections([]);
  };

  const handleEditNode = () => {
    if (!selectedNode) return;

    updateNode(
      selectedNode,
      {
        label: editNodeForm.label,
        status: editNodeForm.status,
        description: editNodeForm.description,
        color: editNodeForm.color,
      },
      selectedConnections
    );

    setDialogOpen(false);
  };

  const handleDeleteNode = () => {
    if (!selectedNode) return;
    deleteNode(selectedNode);
    setDialogOpen(false);
  };

  const handleEditDialogOpen = (isOpen: boolean) => {
    if (isOpen && selectedNode) {
      const node = getSelectedNode();
      if (node) {
        setEditNodeForm({
          id: node.id,
          label: node.label,
          status: node.status,
          description: node.description || "",
          color: node.color || DEFAULT_NODE_COLORS[node.status],
        });
        setSelectedConnections(getConnectedNodes(node.id));
      }
    }
    setDialogOpen(isOpen);
  };

  const handleNodeConnectionChange = (nodeId: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedConnections((prev) => [...prev, nodeId]);
    } else {
      setSelectedConnections((prev) => 
        prev.filter((id) => id !== nodeId)
      );
    }
  };

  const handleSaveToSupabase = async () => {
    setIsSaving(true);
    try {
      const success = await saveToSupabase();
      if (success) {
        toast({
          title: "Salvato con successo",
          description: "La mappa del sito è stata salvata nel database.",
          variant: "default",
        });
      } else {
        toast({
          title: "Errore durante il salvataggio",
          description: "Si è verificato un errore. Controlla la console per i dettagli.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error saving to Supabase:", error);
      toast({
        title: "Errore durante il salvataggio",
        description: "Si è verificato un errore imprevisto.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section id="sitemap" className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center">Mappa del Sito Interattiva</h2>
      <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
        La mappa interattiva mostra la struttura del sito di Solerò Sport Village, evidenziando 
        le sezioni esistenti, quelle da eliminare e le nuove da aggiungere.
      </p>

      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-[#31708f] mr-2"></div>
          <span className="text-sm">Sezioni esistenti</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-[#3c763d] mr-2"></div>
          <span className="text-sm">Nuove sezioni da aggiungere</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-[#a94442] mr-2"></div>
          <span className="text-sm">Sezioni da eliminare</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-[#ff0092] mr-2"></div>
          <span className="text-sm">Colori personalizzati</span>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-[600px] bg-gray-100 rounded-xl">
          <div className="animate-pulse text-lg text-gray-600">Caricamento mappa...</div>
        </div>
      ) : (
        <div id="sitemap-container" ref={containerRef} className="mb-8"></div>
      )}

      <div className="flex flex-wrap gap-4 justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Aggiungi Nodo</Button>
          </DialogTrigger>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Aggiungi Nuova Sezione</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="newNodeId" className="col-span-1">
                  ID
                </Label>
                <Input
                  id="newNodeId"
                  className="col-span-3"
                  value={newNodeForm.id}
                  onChange={(e) =>
                    setNewNodeForm({ ...newNodeForm, id: e.target.value })
                  }
                  placeholder="Identificatore univoco"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="newNodeLabel" className="col-span-1">
                  Nome
                </Label>
                <Input
                  id="newNodeLabel"
                  className="col-span-3"
                  value={newNodeForm.label}
                  onChange={(e) =>
                    setNewNodeForm({ ...newNodeForm, label: e.target.value })
                  }
                  placeholder="Nome visualizzato"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="newNodeStatus" className="col-span-1">
                  Stato
                </Label>
                <Select
                  value={newNodeForm.status}
                  onValueChange={(value: "existing" | "new" | "removing") =>
                    setNewNodeForm({ ...newNodeForm, status: value })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Seleziona stato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="existing">Esistente</SelectItem>
                    <SelectItem value="new">Nuovo</SelectItem>
                    <SelectItem value="removing">Da eliminare</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="newNodeColor" className="col-span-1">
                  Colore
                </Label>
                <div className="col-span-3 flex gap-2">
                  <Input
                    id="newNodeColor"
                    type="color"
                    className="w-12"
                    value={newNodeForm.color || DEFAULT_NODE_COLORS[newNodeForm.status]}
                    onChange={(e) =>
                      setNewNodeForm({ ...newNodeForm, color: e.target.value })
                    }
                  />
                  <span className="text-sm text-gray-500 self-center">
                    Opzionale - sovrascrive il colore predefinito dello stato
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="newNodeDesc" className="col-span-1 pt-2">
                  Descrizione
                </Label>
                <Textarea
                  id="newNodeDesc"
                  className="col-span-3"
                  value={newNodeForm.description}
                  onChange={(e) =>
                    setNewNodeForm({ ...newNodeForm, description: e.target.value })
                  }
                  placeholder="Descrizione della sezione"
                />
              </div>
              
              <div className="grid grid-cols-4 items-start gap-4">
                <Label className="col-span-1 pt-2">
                  Collegamenti
                </Label>
                <div className="col-span-3 space-y-2 max-h-40 overflow-y-auto border rounded p-2">
                  {sitemapData.nodes.map((node) => (
                    <div key={node.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`connection-${node.id}`}
                        checked={selectedConnections.includes(node.id)}
                        onCheckedChange={(checked) => 
                          handleNodeConnectionChange(node.id, checked === true)
                        }
                      />
                      <Label htmlFor={`connection-${node.id}`} className="text-sm">
                        {node.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Annulla</Button>
              </DialogClose>
              <Button type="submit" onClick={handleNewNodeSubmit}>
                Aggiungi
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {selectedNode && (
          <Dialog open={dialogOpen} onOpenChange={handleEditDialogOpen}>
            <DialogTrigger asChild>
              <Button>Modifica Informazioni</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Modifica Sezione: {editNodeForm.label}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="editNodeLabel" className="col-span-1">
                    Nome
                  </Label>
                  <Input
                    id="editNodeLabel"
                    className="col-span-3"
                    value={editNodeForm.label}
                    onChange={(e) =>
                      setEditNodeForm({ ...editNodeForm, label: e.target.value })
                    }
                    placeholder="Nome visualizzato"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="editNodeStatus" className="col-span-1">
                    Stato
                  </Label>
                  <Select
                    value={editNodeForm.status}
                    onValueChange={(value: "existing" | "new" | "removing") =>
                      setEditNodeForm({ ...editNodeForm, status: value })
                    }
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Seleziona stato" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="existing">Esistente</SelectItem>
                      <SelectItem value="new">Nuovo</SelectItem>
                      <SelectItem value="removing">Da eliminare</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="editNodeColor" className="col-span-1">
                    Colore
                  </Label>
                  <div className="col-span-3 flex gap-2">
                    <Input
                      id="editNodeColor"
                      type="color"
                      className="w-12"
                      value={editNodeForm.color}
                      onChange={(e) =>
                        setEditNodeForm({ ...editNodeForm, color: e.target.value })
                      }
                    />
                    <span className="text-sm text-gray-500 self-center">
                      Personalizza il colore di questo nodo
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="editNodeDesc" className="col-span-1 pt-2">
                    Descrizione
                  </Label>
                  <Textarea
                    id="editNodeDesc"
                    className="col-span-3"
                    value={editNodeForm.description}
                    onChange={(e) =>
                      setEditNodeForm({ ...editNodeForm, description: e.target.value })
                    }
                    placeholder="Descrizione della sezione"
                  />
                </div>
                
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label className="col-span-1 pt-2">
                    Collegamenti
                  </Label>
                  <div className="col-span-3 space-y-2 max-h-40 overflow-y-auto border rounded p-2">
                    {sitemapData.nodes
                      .filter(node => node.id !== selectedNode)
                      .map((node) => (
                        <div key={node.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`edit-connection-${node.id}`}
                            checked={selectedConnections.includes(node.id)}
                            onCheckedChange={(checked) => 
                              handleNodeConnectionChange(node.id, checked === true)
                            }
                          />
                          <Label htmlFor={`edit-connection-${node.id}`} className="text-sm">
                            {node.label}
                          </Label>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              <DialogFooter className="flex justify-between">
                <Button 
                  variant="destructive" 
                  onClick={handleDeleteNode}
                >
                  Elimina
                </Button>
                <div className="flex gap-2">
                  <DialogClose asChild>
                    <Button variant="outline">Annulla</Button>
                  </DialogClose>
                  <Button type="submit" onClick={handleEditNode}>
                    Salva
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
        
        <Button 
          variant="outline" 
          onClick={resetSitemap}
        >
          Ripristina Default
        </Button>
        
        <Button 
          className="bg-solero hover:bg-solero-dark" 
          disabled={isSaving}
          onClick={handleSaveToSupabase}
        >
          {isSaving ? "Salvando..." : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Salva Modifiche
            </>
          )}
        </Button>
      </div>
      
      <div className="flex justify-center mt-4">
        <p className="text-sm text-gray-500 max-w-lg text-center">
          Puoi trascinare i nodi per organizzarli meglio, fare clic su di essi per selezionarli 
          e modificarne le proprietà, o aggiungere nuovi nodi alla mappa. Le modifiche vengono salvate automaticamente.
        </p>
      </div>
    </section>
  );
};

export default Sitemap;
