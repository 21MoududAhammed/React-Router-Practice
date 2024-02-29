import { getContact } from "../contacts";

export async function getContactLoader({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
  }