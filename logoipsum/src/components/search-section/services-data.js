import TruckIcon from '../../assets/truck-icon.png';
import RepairIcon from '../../assets/repair-icon.png';
import PlumbingIcon from '../../assets/plumbing-icon.png';
import CleaningIcon from '../../assets/cleaning-icon.png';
import PaintingIcon from '../../assets/painting-icon.png';
import ElectricIcon from '../../assets/electric-icon.png';

const servicesData = [
  {
    serviceName: 'shifting',
    imageUrl: `${TruckIcon}`, 
  },
  {
    serviceName: 'repair',
    imageUrl: `${RepairIcon}`,
  }, 
  {
    serviceName: 'plumbing',
    imageUrl: `${PlumbingIcon}`,
  }, 
  {
    serviceName: 'cleaning',
    imageUrl: `${CleaningIcon}`,
  }, 
  {
    serviceName: 'painting',
    imageUrl: `${PaintingIcon}`,
  },
  {
    serviceName: 'electric',
    imageUrl: `${ElectricIcon}`,
  },

]

export default servicesData;