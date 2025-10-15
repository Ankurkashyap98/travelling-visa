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
      <h2 className="text-2xl font-bold text-vigovia-purple mb-6">
        Important Notes
      </h2>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-vigovia-purple text-white px-6 py-4">
          <div className="grid grid-cols-2 gap-4 font-semibold">
            <div>Point</div>
            <div>Details</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {notes.map((note, index) => (
            <div key={index} className="px-6 py-4">
              <div className="grid grid-cols-2 gap-4 text-vigovia-purple">
                <div className="font-medium">{note.point}</div>
                <div className="font-medium">{note.details}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantNotes;
