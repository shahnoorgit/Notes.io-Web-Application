import Notes from "../Model/Notes.model.js";
export const createNotes = async (req, res) => {
  const { _id, title, body } = req.body;
  const newNote = new Notes({
    madeby: _id,
    title,
    body,
  });

  if (newNote) {
    await newNote
      .save()
      .then((note) => {
        console.log("new Note created");
      })
      .catch((error) => {
        console.log(error);
      });

    res.status(200).json({
      _id: newNote._id,
      title: newNote.title,
      body: newNote.body,
      createdAt: newNote.createdAt,
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

export const DeleteNoteById = async (req, res) => {
  const { _id } = req.body;
  const deleteItem = await Notes.findByIdAndDelete(_id);
  if (!deleteItem) {
    return res.status(400).json({ error: "Note Not Found" });
  }
  res.status(200).json({ message: "Deleted Sucessfully" });
};

export const UpdateNotes = async (req, res) => {
  const { title, body, _id } = req.body;
  const updateItem = await Notes.findByIdAndUpdate(
    _id,
    { title, body },
    { new: true }
  );
  if (!updateItem) {
    return res.status(400).json({ error: "item not found" });
  }
  res.status(200).json(updateItem);
};
