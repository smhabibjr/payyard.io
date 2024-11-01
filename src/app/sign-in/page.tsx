// page.tsx
import React from 'react';

export default function SignIn() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-2xl xl:max-w-3xl transition-transform transform hover:scale-105">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">Login</h2>
                <form>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Type your username"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Type your password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="text-right mb-4">
                        <a href="/forgot-password" className="text-sm text-indigo-500 hover:underline">Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-gray-600 text-sm">Or sign up using</p>
                    <div className="flex justify-center mt-3 space-x-4 text-gray-500">
                        <a href="#" className="hover:text-blue-600">Facebook</a>
                        <a href="#" className="hover:text-blue-400">Twitter</a>
                        <a href="#" className="hover:text-red-500">Google</a>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <a href="/sign-up" className="text-sm text-indigo-500 hover:underline font-medium">SIGN UP</a>
                </div>
            </div>
        </div>
    );
}
