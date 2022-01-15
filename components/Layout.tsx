import { Container } from '@chakra-ui/react'
import {Nav} from "../components/Nav"

const name = "みんなのオールタイムベスト";
export const siteTitle = "みんなのオールタイムベスト";

type typeLayout = {
  children: React.ReactNode;
  page: string;
};

export function Layout({ children, page }: typeLayout) {
  return (
    <Container maxWidth={720}>
      <Nav page={page}/>
      <main>{children}</main>
    </Container>
  );
}