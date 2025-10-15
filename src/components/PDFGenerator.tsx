import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface PDFGeneratorProps {
  itineraryRef: React.RefObject<HTMLDivElement | null>;
}

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ itineraryRef }) => {
  const generatePDF = async () => {
    if (!itineraryRef.current) return;

    try {
      // Create a new PDF document with the exact dimensions from Figma
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [1407, 12748], // Width: 1407px, Height: 12748px as specified
      });

      // Capture the itinerary content
      const canvas = await html2canvas(itineraryRef.current, {
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        width: 1407,
        height: 12748,
      });

      const imgData = canvas.toDataURL("image/png");

      // Add the image to PDF
      pdf.addImage(imgData, "PNG", 0, 0, 1407, 12748);

      // Save the PDF
      pdf.save("vigovia-itinerary.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  return (
    <button
      onClick={generatePDF}
      className="bg-vigovia-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-vigovia-light-purple transition-colors"
    >
      Download PDF
    </button>
  );
};

export default PDFGenerator;
