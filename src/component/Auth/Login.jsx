import { useState } from "react";

function Login({handleLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    };

    return (
        <>
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="border-2 rounded-xl border-emerald-600 p-20">
                    <form
                        onSubmit={(e) => submitHandler(e)}
                        className="flex flex-col items-center justify-center"
                    >
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
                            type="text"
                            placeholder="Enter your email"
                        />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="outline-none mt-3 bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
                            type="password"
                            placeholder="Enter password"
                        />
                        <button
                            className="mt-5 text-white outline-none bg-transparent border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
