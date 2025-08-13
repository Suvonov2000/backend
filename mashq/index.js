const fs = require("fs").promises;
const path = require("path");
const crypto = require("crypto");

const GET = async (params) => {
  const data = JSON.parse(
    await fs.readFile(path.join(__dirname, "user.json"), "utf-8")
  );
  return data.filter((user) =>
    `${user.name} ${user.surname}`
      .toLowerCase()
      .includes(params.q.toLowerCase())
  );
};

const POST = async (body) => {
  if (!body || !body.name || !body.surname) {
    throw new Error("Invalid body");
  }
  const data = JSON.parse(
    await fs.readFile(path.join(__dirname, "user.json"), "utf-8")
  );
  const createUser = {
    id: crypto.randomUUID(),
    name: body.name,
    surname: body.surname,
  };
  await fs.writeFile(
    path.join(__dirname, "user.json"),
    JSON.stringify([...data, createUser]),
    { encoding: "utf-8" }
  );
  return createUser;
};

const PUT = async (body) => {
  if (!body || !body.name || !body.surname) {
    throw new Error("Invalid body");
  }
  const data = JSON.parse(
    await fs.readFile(path.join(__dirname, "user.json"), "utf-8")
  );
  const updataData = data.map((user) => {
    if (user.id === body.id) {
      return {
        ...user,
        name: body.name ?? user.name,
        surname: body.surnmae ?? user.surname,
      };
    }
    return user;
  });
  await fs.writeFile(
    path.join(__dirname, "user.json"),
    JSON.stringify(updataData),
    { encoding: "utf-8" }
  );
  return updataData.find((user) => user.id === body.id);
};

const DELETE = async (body) => {
  if (!body || !body.id) {
    throw new Error("Invalid body");
  }
  const data = JSON.parse(
    await fs.readFile(path.join(__dirname, "user.json"), "utf-8")
  );
  const updataData = data.filter((user) => user.id !== body.id);
  await fs.writeFile(
    path.join(__dirname, "user.json"),
    JSON.stringify(updataData),
    { encoding: "utf-8" }
  );
  return "DLETETED";
};

// PUT({
//   id: "30330019-9df6-462e-a375-949039cfd2d8",
//   name: "Asadbek",
//   surname: "Abduvoitov",
// });

// DELETE({ id: "1" });
// POST({ name: "Humoyun", surname: "Nurullayev" });

GET({ q: "T" }).then((data) => {
  console.log(data);
});
