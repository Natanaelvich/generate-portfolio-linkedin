async function handler() {
  return Response.json({ message: 'Hello World' })
}

export { handler as GET }
