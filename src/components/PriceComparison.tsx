
import { pricingPlans } from "@/lib/sitemapData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const PriceComparison = () => {
  const handlePreviewClick = () => {
    window.open("https://cdn.prod.website-files.com/65772a4150fc91181591a1e5/6818a9c5d7e7ad21f5c02069_RIG_PVT_SOLEROSPORTVILLAGE.pdf", "_blank");
  };

  return (
    <section id="quotation" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Confronto Piani</h2>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Abbiamo preparato due opzioni di sviluppo per il sito di Solerò Sport Village, 
          ognuna con caratteristiche diverse per soddisfare le vostre esigenze.
        </p>
        
        <Tabs defaultValue="comparison" className="mx-auto">
          <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="comparison">Confronto Piani</TabsTrigger>
            <TabsTrigger value="details">Dettagli Completi</TabsTrigger>
          </TabsList>
          
          <TabsContent value="comparison">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className="border-t-4 overflow-hidden" style={{ borderTopColor: index === 0 ? "#ff0092" : "#3c763d" }}>
                  <CardHeader className="bg-gray-100">
                    <CardTitle className="text-2xl font-bold text-center">{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4">Sviluppo Iniziale</h3>
                      <div className="text-3xl font-bold text-center mb-4">{plan.initialTotal}</div>
                      
                      <ul className="space-y-2 mb-6">
                        {plan.initialItems.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-solero flex-shrink-0" />
                            <span className="text-sm">{item.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Costi Mensili</h3>
                      <div className="text-2xl font-bold text-center mb-4">{plan.ongoingTotal}</div>
                      
                      <ul className="space-y-2 mb-6">
                        {plan.ongoingItems.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-gray-500 flex-shrink-0" />
                            <span className="text-sm">{item.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="details">
            <div className="max-w-5xl mx-auto">
              {pricingPlans.map((plan, planIndex) => (
                <div key={planIndex} className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: planIndex === 0 ? "#ff0092" : "#3c763d" }}>
                    {plan.name}
                  </h3>
                  
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>Sviluppo Iniziale: {plan.initialTotal}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-6 divide-y">
                        {plan.initialItems.map((item, itemIndex) => (
                          <li key={itemIndex} className={itemIndex > 0 ? "pt-6" : ""}>
                            <div className="flex justify-between mb-2">
                              <h4 className="font-semibold">{item.title}</h4>
                              <span className="font-semibold text-solero">{item.price}</span>
                            </div>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Costi Mensili: {plan.ongoingTotal}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-6 divide-y">
                        {plan.ongoingItems.map((item, itemIndex) => (
                          <li key={itemIndex} className={itemIndex > 0 ? "pt-6" : ""}>
                            <div className="flex justify-between mb-2">
                              <h4 className="font-semibold">{item.title}</h4>
                              <span className="font-semibold text-solero">{item.price}</span>
                            </div>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Consulta il preventivo dettagliato per maggiori informazioni sulle opzioni disponibili.
          </p>
          <Button onClick={handlePreviewClick} size="lg" className="bg-solero hover:bg-solero-dark text-white">
            Visualizza Preventivo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
