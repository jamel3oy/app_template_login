import { FaRegCalendarAlt, FaRegHospital } from 'react-icons/fa';
import { FiMap, FiUsers } from 'react-icons/fi';
import { HiOutlineAcademicCap, HiOutlineChartSquareBar } from 'react-icons/hi';
import {
  RiCustomerService2Line,
  RiDashboardLine,
  RiFileUploadLine,
  RiShieldUserLine,
  RiTodoLine,
} from 'react-icons/ri';
import { BiCarousel, BiCartAlt, BiErrorAlt, BiTask } from 'react-icons/bi';
import { BsBriefcase, BsCart4, BsChatDots, BsCurrencyBitcoin, BsQuestionDiamond } from 'react-icons/bs';
import { DiHtml5Multimedia } from 'react-icons/di';
import {
  MdOutlineAnalytics,
  MdOutlineContactPhone,
  MdOutlineContactSupport,
  MdOutlineDns,
  MdOutlineManageAccounts,
} from 'react-icons/md';
import { CgFeed } from 'react-icons/cg';
import { GrUserAdmin } from 'react-icons/gr';
import { AiOutlineEdit, AiOutlineUnorderedList } from 'react-icons/ai';
import { TbFileInvoice } from 'react-icons/tb';

const routesConfig = [
  {
    id: 'app',
    title: 'Application',
    messageId: 'ระบบ...',
    type: 'group',
    children: [
      {
        id: 'home',
        title: 'memuItem1',
        messageId: 'memuItem1',
        type: 'item',
        icon: <BsCurrencyBitcoin />,
        url: '/home',
      },
      {
        id: 'test',
        title: 'test',
        messageId: 'test',
        type: 'item',
        icon: <RiCustomerService2Line />,
        url: '/test',
      },
      {
        id: 'collapse',
        title: 'collapse',
        messageId: 'collapse',
        type: 'collapse',
        icon: <BiCartAlt />,
        children: [
          {
            id: 'products',
            title: 'Products',
            messageId: 'products',
            type: 'item',
            // icon: <BiCartAlt />,
            url: '/ecommerce/products',
          },
          {
            id: 'product_detail',
            title: 'Product Detail',
            messageId: 'productDetail',
            type: 'item', 
            // icon: <BiCartAlt />,
            url: '/ecommerce/product_detail',
          },
          {
            id: 'orders',
            title: 'Orders',
            messageId: 'orders',
            type: 'item',
            // icon: <BiCartAlt />,
            url: '/ecommerce/orders',
          },
          {
            id: 'cart',
            title: 'Cart',
            messageId: 'cart',
            type: 'item',
            // icon: <BiCartAlt />,
            url: '/ecommerce/cart',
          },
          {
            id: 'checkout',
            title: 'Checkout',
            messageId: 'checkout',
            type: 'item',
            // icon: <BiCartAlt />,
            url: '/ecommerce/checkout',
          },
          {
            id: 'confirmation',
            title: 'Confirmation',
            messageId: 'confirmation',
            type: 'item',
            // icon: <BiCartAlt />,
            url: '/ecommerce/confirmation',
          },
          {
            id: 'invoice-1',
            title: 'Invoice 1',
            messageId: 'invoice1',
            type: 'item',
            // icon: <BiCartAlt />,
            url: '/ecommerce/invoice-1',
          },
          {
            id: 'invoice-2',
            title: 'Invoice 2',
            messageId: 'invoice2',
            type: 'item',
            // icon: <BiCartAlt />,
            url: '/ecommerce/invoice-2',
          },
        ],
      },
    ],
  },
];
export default routesConfig;
