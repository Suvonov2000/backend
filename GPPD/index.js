const fs = require("fs").promises;
const path = require("path");
const crypto = require("crypto");

const GET = () => {};
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
  if (data.find((user) => user.id === body.id) === undefined) {
    throw new Error("User not found");
  }

  const updataData = data.map((user) => {
    if (user.id === body.id) {
      return {
        ...user,
        name: body.name ?? user.name,
        surname: body.name ?? user.surname,
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
const DELETE = () => {};

// POST({ name: "Asadbek", surname: "Abduvoitov" });
PUT({
  id: "8928ae16-d55d-4d57-b568-2dc0399d4046",
  name: "Umidjon",
  surname: "Suvonov",
});
