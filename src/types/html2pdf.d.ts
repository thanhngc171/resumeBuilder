declare module 'html2pdf.js' {
  function html2pdf(): {
    from: (element: HTMLElement) => {
      save: () => void;
      // Add other methods as needed
    };
  };
  export default html2pdf;
}