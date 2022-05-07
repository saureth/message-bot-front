import {
    gql
} from "@apollo/client";

const userMutations = {
    loginUser: gql`
    mutation LoginUser($loginInput: LoginInput) {
        loginUser(loginInput: $loginInput) {
        id
        fullname
        email
        usertype
        token
        }
    }`
} 

export default userMutations;