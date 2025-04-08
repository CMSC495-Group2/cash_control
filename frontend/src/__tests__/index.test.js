describe("index.js", () => {
    it("renders App inside BrowserRouter without crashing", () => {
      // Set up the root element before anything else
      const rootElement = document.createElement("div");
      rootElement.setAttribute("id", "root");
      document.body.appendChild(rootElement);
  
      // Now mock react-dom/client WITHIN the test scope
      const rootMock = { render: jest.fn() };
      jest.resetModules(); // Clear any cached modules
      jest.doMock("react-dom/client", () => ({
        createRoot: jest.fn(() => rootMock),
      }));
  
      // Now safely require index.js AFTER mocks are set
      require("../index");
  
      const { createRoot } = require("react-dom/client");
      expect(createRoot).toHaveBeenCalledWith(rootElement);
      expect(rootMock.render).toHaveBeenCalled();
  
      // Cleanup
      document.body.removeChild(rootElement);
    });
  });