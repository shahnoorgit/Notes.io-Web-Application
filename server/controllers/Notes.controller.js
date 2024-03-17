import Notes from "../Model/Notes.model.js";
export const createNotes = async (req, res) => {
  const { _id, title, body } = req.body;
  const newNote = new Notes({
    madeby: _id,
    title,
    body,
  });

  if (newNote) {
    newNote
      .save()
      .then((note) => {
        console.log("new Note created");
      })
      .catch((error) => {
        console.log(error);
      });

    res.status(200).json({
      _id,
      title,
      body,
    });
  }
};
export const fetchNotes = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const notes = await Notes.find({ madeby: userId }).sort({ createdAt: -1 });

    if (notes.length == 0) {
      return res.status(201).json([]);
    }
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: "error while fetching Notes" });
    console.log(error);
  }
};
