import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  name: string;
  phone: string;
};

export default function ContactFormEmail({
  name,
  phone,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Новый запрос от клиента</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Вы получили новый номер клиента с просьбой перезвонить ему
              </Heading>
              <Text>Имя клиента: {name}</Text>
              <Hr />
              <Text>
                Номер телефона: <a href={`tel:${phone}`}>{phone}</a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
