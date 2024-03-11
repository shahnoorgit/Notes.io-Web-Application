import Card from "./Card";

const NotesCon = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 max-sm:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
        {" "}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default NotesCon;
