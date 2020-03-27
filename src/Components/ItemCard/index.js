import React, { useState } from 'react';
import styles from './itemcard.module.css';
import mask from '../../assets/mask.jpeg';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ItemCard = ({handleDialogOpen}) => {
  return (
    <Card className={styles.cardBody}>
      <img
        alt={'help'}
        className={styles.root}
        responsive
        src={mask}
      />
      <CardContent className={styles.details}>
        <Typography gutterBottom variant="h5" component="h2">
          Blue Face Mask
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <div className={styles.descriptionContainer}>
            <div className={styles.boldText}>Price: Rs. 75</div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.boldText}>Quantity Available: 200</div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.boldText}>Color:</div>
            <div>Blue</div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.boldText}>Usage:</div>
            <div>Hospital, home, office</div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.boldText}>Mask Securing Method:</div>
            <div>Earloop</div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.boldText}>Size:</div>
            <div>Standard</div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.boldText}>Packaging Type:</div>
            <div>Poly Bag</div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.boldText}>Pattern:</div>
            <div>Plain</div>
          </div>
        </Typography>
      </CardContent>
      <CardContent className={styles.supplierDetails}>
        <div>Supplier Name 1</div>
        <div className={styles.subText}>Model Town, New Delhi</div>

        <div className={styles.buttonContainer}>
          <Button onClick={handleDialogOpen} fullWidth variant="contained" color="primary">
            View Mobile Number
          </Button>
          <div className={styles.supplierButton}>
            <Button fullWidth variant="contained" color="secondary">
              Contact Supplier
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
