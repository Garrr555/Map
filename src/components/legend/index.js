export default function Legen() {
  return (
    <div className="fixed bottom-8 right-8 w-60 p-4 z-10 bg-white rounded-md shadow-lg">
      <div className="flex my-1">
        <div>12,567</div> {/* Data Kepadatan Palsu */}
        <p className="ml-auto">Kepadatan (jiwa/km²)</p>
      </div>
      <div className="flex my-1">
        <div>2,350,780</div> {/* Data Populasi Palsu */}
        <p className="ml-auto">Populasi (jiwa)</p>
      </div>
      <div className="flex my-1">
        <div>1.42%</div> {/* Data Pertumbuhan Palsu */}
        <p className="ml-auto">Pertumbuhan (%)</p>
      </div>
    </div>
  );
}
