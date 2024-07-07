const handler = (_req, res) => {
 res.status(200).json({
  result: "hello world",
 });
};

export default handler;
