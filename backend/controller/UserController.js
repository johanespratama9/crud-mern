import User from "../models/UserModel";

export const getUser = async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const getUserById = async (req, res) => {
    try{
        const user = await User.find(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}


export const saveUser = async (req, res) => {
        const user = new (req,body);
    try{
        const inserteuser = await user.save();
        res.status(201).json(inserteuser);
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

export const updateUser = async (req, res) => {
    const user = new (req,body);
try{
    const inserteuser = await user.save();
    res.status(201).json(inserteuser);
} catch (error) {
    res.status(400).json({message : error.message})
}
}

export const deleteUser = async (req, res) => {
    const user = new (req,body);
try{
    const inserteuser = await user.save();
    res.status(201).json(inserteuser);
} catch (error) {
    res.status(400).json({message : error.message})
}
}