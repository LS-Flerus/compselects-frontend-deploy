import { Box, Text, Flex, Grid } from "@chakra-ui/react";
import GoogleMapEmbed from "./GoogleMapEmbed";

export const FaleConosco = () => {
  const texto =
    "Fale conosco! A equipe da Editora CompSelect está à disposição para tirar dúvidas, receber sugestões, orientações sobre submissão de trabalhos ou qualquer outro assunto relacionado às nossas publicações e serviços editoriais. Entre em contato conosco por meio do formulário abaixo ou pelos nossos canais oficiais. Teremos prazer em atendê-lo com agilidade, atenção e o compromisso de sempre oferecer o melhor suporte à comunidade acadêmica e científica.";

  return (
    <Box bgColor={"white"} color={"#262A38"} w="100%">
      <Box h="100vh" maxH="100vh" overflow="hidden">
        <Grid
          h="full"
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          overflow="hidden"
        >
          <Box p={8} placeContent={"center"} overflow="auto">
            <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign="center">
              Fale conosco!
            </Text>
            <Text fontSize={"lg"} textAlign={"justify"}>
              {texto}
            </Text>

            <Flex flexDir={"column"} gap={2} mt={12}>
              <Text fontSize="2xl" mb={4}>
                Informações de contato e redes sociais:
              </Text>
              <Flex gap={2} flexDir={"column"}>
                <Text fontSize="lg">Telefone: +55 (83) 9 9999-9999</Text>
                <Text fontSize="lg">
                  E-mail de suporte: contato@compselects.com
                </Text>
                <Text fontSize="lg">
                  E-mail para parcerias: parcerias@compselects.com
                </Text>
                <Text fontSize="lg">
                  Endereço: Rua das Flores, 123, Jardim das Acácias, São Paulo,
                  SP
                </Text>
                <Text fontSize="lg">Facebook: Compselects</Text>
                <Text fontSize="lg">Instagram: @compselects</Text>
              </Flex>
            </Flex>
          </Box>

          <Box h="100%" overflow="hidden">
            <GoogleMapEmbed />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
