import { Flex, Box, Text, Input, Spinner, Icon, Button, Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import { filterData, getFilterValues } from '../pages/utils/filterData';
import { PropertyProps } from '../pages/types';
import { setValues } from 'framer-motion/types/render/utils/setters';


const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues:any) => {
    const path = router.pathname; 
    const {query} = router;
    
    const values = getFilterValues( filterValues );


    /* Aclarar types */
    values.forEach( (item) => {
      if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
      
    })

    router.push({ pathname: path, query})
  }
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map( filter=> (
        <Box key={filter.queryName}>
          <Select 
            onChange={ (e) => searchProperties({ [filter.queryName]: e.target.value})}
            placeholder= {filter.placeholder}
            p="2"
            w="fit-content"
          >
            {filter?.items?.map(  item => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
            </Select>

        </Box>
      ) )}
    </Flex>
  )
}

export default SearchFilters