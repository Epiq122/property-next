const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
  try {
    const res = await fetch(`${apiDomain}/properties`);
    // handle the case where the domain is not available
    if (!apiDomain) {
      return [];
    }

    if (!res.ok) {
      throw new Error("An error occurred while fetching the data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
export { fetchProperties };
