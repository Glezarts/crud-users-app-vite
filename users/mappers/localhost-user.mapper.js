import { User } from "../models/user.js"

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */

export const localhostUserToModel = ( localhostUser ) => {
    const {
        avatar,
        balance, 
        first_name,
        last_name,
        id, 
        isActive,
        gender
    } = localhostUser

    return new User({
        avatar,
        balance,
        firstName: first_name,
        lastName: last_name,
        id,
        isActive,
        gender
    })
}