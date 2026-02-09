import { UserInfo } from "./UserInfo";
export const UserCard = ({ props }) => {
  return (
    <div>
      <h2>User Details</h2>
      <UserInfo {...props} />
    </div>
  );
};
// export const UserCard = ({ id, ...rest }) => {
//   return (
//     <div>
//       <h2>User {id} Details</h2>
//       <UserInfo {...rest} />
//     </div>
//   );
// };
