import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";

export default function EventPage() {
  const router = useRouter();
  return <Layout title="DJ Event">{router.query.slug}</Layout>;
}
