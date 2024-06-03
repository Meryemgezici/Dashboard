"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import pathImg from "../../public/assets/images/rising-logo.png";
import { postAPI } from "@/services/fetchAPI";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await postAPI("/login", { username, password });
      if (response.jwt) {
        // Tokeni yerel depolamaya kaydet
        localStorage.setItem("token", response.jwt);
        setMessage(`Success: ${JSON.stringify(response)}`);
        // Başarılı girişten sonra yönlendir
        router.push("/dashboard");
      } else {
        setMessage("Hata: Kullanıcı adı veya şifre yanlış");
      }
    } catch (error) {
      setMessage(`Error: ${(error as Error).message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-MidnightBlue via-DarkTeal to-TealishBlue">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-[900px] mx-auto">
        <div className="w-2/5 relative">
          <Image
            src={pathImg}
            alt="Rising"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="w-5/10 p-8">
          <h1 className="text-3xl font-bold text-DarkGray mb-4">
            Rising Dijitale Hoş Geldiniz
          </h1>
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-4">
              <label htmlFor="username" className="block text-SlateGray mb-2">
                Kullanıcı Adı:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-SlateGray mb-2">
                Şifre:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-TealishBlue hover:bg-MidnightBlue text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
          {message && <p className="text-SlateGray">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
