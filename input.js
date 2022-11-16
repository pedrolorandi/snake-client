let connection;

// Event listener for the user inputs
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Callback function to handle user input
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'd') {
    connection.write("Move: right");
  }

  if (key === '1') {
    connection.write("Say: You talking to me?");
  }

  if (key === '2') {
    connection.write("Say: Get To The Choppa!");
  }

  if (key === '3') {
    connection.write("Say: My precious!");
  }
};

module.exports = { setupInput };