const express = require("express");
const app = express();
const Path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, "public")));

// Home route - show all tasks
app.get("/", function (req, res) {
  const dirPath = Path.join(__dirname, "files");

  fs.readdir(dirPath, function (err, fileNames) {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading directory");
    }

    const tasks = fileNames.map((file) => {
      const filePath = Path.join(dirPath, file);
      const content = fs.readFileSync(filePath, "utf-8");
      return {
        title: file.replace(".txt", ""),
        details: content,
      };
    });

    res.render("index", { files: tasks });
  });
});

// Create task
app.post("/create", function (req, res) {
  const fileName = req.body.title.trim().split(" ").join("") + ".txt";
  const filePath = Path.join(__dirname, "files", fileName);
  const fileContent = req.body.details;

  fs.writeFile(filePath, fileContent, function (err) {
    if (err) {
      console.error(err);
      return res.status(500).send("Error creating file");
    }
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
