import { Box, Spacer, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons//go';
import millify from "millify";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

/* TYPES  */

const PropertyDetails = ({propertyDetails:{photos }}: any) => (
  <Box maxWidth='1000px' margin="auto" p="4">
    {photos && <ImageScrollbar data={photos} />}
  </Box>
)
// price, rentFrequency, rooms, title, baths, area, agency, isVerified, type, purpose, furnishingStatus, amentities, 
export default PropertyDetails

/* TYPES  */
export async function getServerSideProps({ params }:any ) {
  const data = await fetchApi(`${baseUrl}/detail?externalID=${params.id}`);
  return{
    props:{
      propertyDetails: data
    }
  }
}

