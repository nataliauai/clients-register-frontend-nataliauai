interface IContact {
    id: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    userrId: string;
    createdAt: Date;
    deletedAt: Date;
  }
  
  interface IContactRequest {
    userId: string;
    fullName: string;
    phoneNumber: number;
    email: string;
  }
  
  interface IContactUpdate {
    fullName?: string;
    phoneNumber?: number;
    email?: string;
  }
  
  export type { IContact, IContactRequest, IContactUpdate };

  interface IUser{
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    createdAt: Date;
  }
  interface IUserRequest {
    name: string;
    email: string;
    phoneNumber: string;
  }
  
  interface IUserUpdate {
    name?: string;
    email?: string;
    phoneNumber?: string;
  }
  
  export type { IUser, IUserRequest, IUserUpdate };