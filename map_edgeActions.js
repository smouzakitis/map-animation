/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         // insert code to be run at timeline play here
         // Change the text in an element
         sym.getSymbol("Axeloos").$("txtCityName").html("Αχελώος");
         sym.getSymbol("Meliti").$("txtCityName").html("Μελίτη");
         sym.getSymbol("NeoSanta").$("txtCityName").html("Νέα Σάντα");
         sym.getSymbol("Filippoi").$("txtCityName").html("Φίλιπποι");
         sym.getSymbol("Lagkadas").$("txtCityName").html("Λαγκαδάς");
         sym.getSymbol("Amyntaio").$("txtCityName").html("Αμύνταιο");
         sym.getSymbol("Kardia").$("txtCityName").html("Καρδιά");
         sym.getSymbol("Thesaloniki").$("txtCityName").html("Θεσσαλονίκη");
         sym.getSymbol("AgDimitrios").$("txtCityName").html("Αγ.Δημήτριος");
         sym.getSymbol("Larisa").$("txtCityName").html("Λάρισα");
         sym.getSymbol("Trikala").$("txtCityName").html("Τρίκαλα");
         sym.getSymbol("Distomo").$("txtCityName").html("Δίστομο");
         sym.getSymbol("Korinthos").$("txtCityName").html("Κόρινθος");
         sym.getSymbol("Megalopoli").$("txtCityName").html("Μεγαλόπολη");
         sym.getSymbol("Laurio").$("txtCityName").html("Λαύριο");
         sym.getSymbol("Argyroupoli").$("txtCityName").html("Αργυρούπολη");
         sym.getSymbol("Larimna").$("txtCityName").html("Λάρυμνα");
         sym.getSymbol("Aliveri").$("txtCityName").html("Αλιβέρι");
         sym.getSymbol("Koumoundouros").$("txtCityName").html("Κουμουνδούρος");
         sym.getSymbol("Acharnes").$("txtCityName").html("Αχαρνές");
         sym.getSymbol("Agios_Stefanos").$("txtCityName").html("Αγ.Στέφανος");
         sym.getSymbol("Pallini").$("txtCityName").html("Παλλήνη");
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'City'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1235, function(sym, e) {
         sym.stop()

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cityPoint}", "mouseenter", function(sym, e) {
         sym.play("ShowInfo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cityPoint}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.play("HideInfo");

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         // insert code to be run at timeline play here
         

      });
      //Edge binding end

   })("City");
   //Edge symbol end:'City'

   //=========================================================
   
   //Edge symbol: 'Lines_Flashing'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // insert code to be run at timeline end here
         sym.play(0);

      });
      //Edge binding end

   })("Lines_Flashing");
   //Edge symbol end:'Lines_Flashing'

})(jQuery, AdobeEdge, "EDGE-9353047");