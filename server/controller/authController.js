import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const createUser = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    try {
        const emailVerification = await User.findOne({ email });
        if (emailVerification) {
        return res.status(409).json(`Email already taken`);
        }
        const saltPassword = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltPassword);

        const newUser = await new User({
        first_name,
        last_name,
        email,
        password: hashedPassword,
        image : req.file ? '/public/images/' + req.file.filename : null
        })

        newUser.save();
        return res.status(201).json(`Welcom to our event manager ${first_name}`);
    } catch (err) {
        console.log(err);
        return res.status(500).json(`Internal server error`, err);
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
        return res.status(401).json({ message: "Email or password invalid." });
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
        return res.status(401).json({ message: "Email or password invalid." });
        }
        const token = jwt.sign({ id: user._id }, JWT_SECRET);
        return res.status(200).json({message : `Welcome ${user.first_name}`, token});
    } catch (err) {
        console.log(err);
        return res.status(500).json(`Internal server error`, err);
    }
}
