import React from "react";
import { IContact } from "../interfaces";


interface CardProps {
  contact: IContact;
}

export const Card = ({ contact }: CardProps) => {
  return (
    <>
      <div>
        <h4>{contact.fullName}</h4>
      </div>
      <div>
        <p>{contact.email}</p>
      </div>
      <div>
        <p>{contact.phoneNumber}</p>
      </div>
    </>
  );
};