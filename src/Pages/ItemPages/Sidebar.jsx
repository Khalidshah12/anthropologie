import React from 'react'
import { Box, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
function Sidebar() {
  return (
    <>
      
        <Box
          width={"200.156px"}
          h="auto"
        //   border={"1px solid black"}
          mr={"40px"}
          fontSize={"14px"}
        >
          <Text mb={"10px"}>Browse by:</Text>
          <hr />
          <Box>
            <Text
              paddingBottom={"10px"}
              pt="10px"
              mb={"0px"}
              _hover={{
                borderBottom: "1px solid #167A92",
                width: "fit-content",
              }}
              cursor={"pointer"}
            >
              Clothing
            </Text>
            <Box>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                New!
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Top Rated
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Activewear
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Blazers
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Dresses
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Getaway & Resort Wear
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Intimates & Lingerie
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Jackets & Coats
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Jeans
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Jumpsuits
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Kimonos & Kaftans
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Loungewear
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Pants
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Petites
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Plus
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Shorts
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Skirts
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Sleepwear & Robes
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Sweaters
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Swimwear
              </Text>
              <Text
                mb={"3px"}
                _hover={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                cursor={"pointer"}
              >
                Tops & Tees
              </Text>
            </Box>
          </Box>
          <Text paddingBottom={"10px"} pt="10px">
            Filter By:
          </Text>
          <hr />
          <Box>
            <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                          Product Type
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      overflow="scroll"
                      h={"400px"}
                      overflowX={"hidden"}
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Tops (709)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Dresses (586)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Jeans (499)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Jacket & Outerwear (392)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Sweaters (363)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Paints (280)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Sleepwear (175)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Skirts (134)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Undies (95)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Bras (90)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Cover-Ups (81)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Apparel (8)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Sweatshirts (5)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Scarves (6)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Shapewear</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Sets (9)</Text>
                      </Box>
                      <Box         p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px">
                        <Text>Wedding Dress (3)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Wedding Separates (3)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Bags (1)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Body Jewelry (1)</Text>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>

          {/* price */}
          <Box>
            <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "#167A92" }}
                        >
                          Price
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      m="0"
                      h={"auto"}
                     
                    >
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>Less than $25 (52)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>$25 - $50 (151)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>$50 - $100 (670)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>$100 - $200 (1580)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>$200 - $500 (915)</Text>
                      </Box>
                      <Box
                        p={"8px"}
                        cursor={"pointer"}
                        _hover={{
                          color: "#167A92",
                          border: "1px solid #167A92",
                        }}
                        w="160px"
                      >
                        <Text>More than $500 (118)</Text>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>

    </>
  )
}

export default Sidebar
