import React, { useState } from 'react';
import styles from './supplymarketplace.module.css';

import ItemCard from '../../Components/ItemCard';
import SearchBox from '../../Components/SearchBox';
import PhoneRegisterDialog from '../../Components/PhoneRegisterDialog';

const SupplyMarketPlace = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <div className={styles.searchContainer}>
      <PhoneRegisterDialog isOpen={openDialog} handleClose={handleClose} />
      <div>
        <div className={styles.searchHeading}>Masks near Delhi</div>
        <div className={styles.searchBoxContainer}>
          <SearchBox city={'delhi'} searchString={'mask'} />
        </div>
      </div>
      <div>
        <ItemCard handleDialogOpen={handleClickOpen} />
        <ItemCard handleDialogOpen={handleClickOpen} />
        <ItemCard handleDialogOpen={handleClickOpen} />
      </div>
    </div>
  );
};

export default SupplyMarketPlace;
