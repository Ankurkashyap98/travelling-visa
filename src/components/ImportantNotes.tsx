import React from "react";

interface ImportantNote {
  point: string;
  details: string;
}

interface ImportantNotesProps {
  notes: ImportantNote[];
}

const ImportantNotes: React.FC<ImportantNotesProps> = ({ notes }) => {
  return (
    <div className="mx-6 mb-8">
      <h2 className="text-2xl font-bold text-[#321E5D] mb-6">Important Notes</h2>

      {/* Outer Container */}
      <div className="flex">
        {/* LEFT COLUMN - POINT */}
        <div className="flex flex-col items-center">
          {/* Header */}
          <div
            className="flex items-center justify-center text-white font-semibold text-lg"
            style={{
              width: "329px",
              height: "61px",
              backgroundColor: "#321E5D",
              borderTopLeftRadius: "45px",
              borderTopRightRadius: "45px",
            }}
          >
            Point
          </div>

          {/* Body */}
          <div
            className="flex flex-col justify-between items-center text-[#321E5D] font-medium"
            style={{
              width: "329px",
              height: "450px",
              backgroundColor: "#F9EEFF",
              borderBottomLeftRadius: "30px",
              borderBottomRightRadius: "30px",
              paddingTop: "20px",
              paddingBottom: "20px",
             
            }}
          >
            {notes.map((note, index) => (
              <div
                key={index}
                className="text-center "
                style={{ height: "61px", display: "flex", alignItems: "center" }}
              >
                {note.point}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - DETAILS */}
        <div className="flex flex-col items-center ml-2">
          {/* Header */}
          <div
            className="flex items-center justify-center text-white font-semibold text-lg"
            style={{
              width: "860px",
              height: "61px",
              backgroundColor: "#321E5D",
              borderTopLeftRadius: "45px",
              borderTopRightRadius: "45px",
            }}
          >
            Details
          </div>

          {/* Body */}
          <div
            className="text-[#321E5D] font-medium"
            style={{
              width: "858.99px",
              height: "450px",
              backgroundColor: "#F9EEFF",
              borderBottomLeftRadius: "30px",
              borderBottomRightRadius: "30px",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginLeft: "13px",
              // alignItems: "center",  
              textAlign: "center",
            }}
          >
            {notes.map((note, index) => (
              <div
                key={index}
                className="text-center leading-snug"
                style={{
                  minHeight: "61px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight : 300,
                  fontSize : "20px",
                  lineHeight : "25px",

                }}
              >
                {note.details}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantNotes;
