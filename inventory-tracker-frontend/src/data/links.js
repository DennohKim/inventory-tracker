import { BiPrinter } from "react-icons/bi";
import { BsDistributeVertical } from "react-icons/bs";
import { MdOutlineDashboard, MdComputer,  } from "react-icons/md";



export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'Dashboard',
          icon: <MdOutlineDashboard />,
        },
      ],
    },
  
    {
      title: 'Electronics',
      links: [
        {
          name: 'Computers',
          icon: <MdComputer  />,
        },
        {
          name: 'Printers',
          icon: <BiPrinter />,
        }
      ],
    },
    {
        title: 'Distributor',
        links: [
          {
            name: 'Manufacturers',
            icon: <BsDistributeVertical  />,
          }
        ],
      },
]