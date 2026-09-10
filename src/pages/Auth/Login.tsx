import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form"
import { supabase } from "@/lib/supbase";
import { useState } from "react";

type RegisterFormValues = {
  email: string
  password: string
}
export default function Login() {

  const navigate = useNavigate()
  const [authError, setAuthError] = useState({
    error: false,
    msg: ''
  })

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<RegisterFormValues>({
    defaultValues:{
        email: '',
        password: ''
    }
  })
  const onSubmit = async(data:RegisterFormValues) => {
    const {data:authData, error} = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password
    });
    if(error){
      setAuthError({error: true, msg: error.message})
    }
    else{
      navigate('/')
      console.log('Login succeful')
    }
  }
  
  return (
    <>
      <div className="flex items-center justify-center px-5 py-10 lg:py-30">
        <Card className="max-w-lg w-full">
          {authError.error ? <h1 className="text-xl text-center font-semibold text-red-600">Error! {authError.msg}</h1> : ""}
          <CardHeader>
            <CardTitle>Login account</CardTitle>
            <CardDescription className="max-w-md">Log in to your account</CardDescription>
            <CardAction>
              <NavLink to="/register"><Button className="text-lg" variant="link">Sign Up</Button></NavLink>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form
             id="submit-form"
             onSubmit={handleSubmit(onSubmit)}
             className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <label className="text-xl font-semibold">Email</label>
                <Input {...register('email', 
                    {
                      required: 'Email обьязателен',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Некорректный email",
                      }
                    })} placeholder="Email..."/>
                    {errors.email && (
                        <span className="text-red-500 text-sm font-medium">{errors.email?.message}</span>
                    )}
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xl font-semibold">Password</label>
                <Input {...register("password", {
                      required: "Пароль обязателен",
                      minLength: { value: 6, message: "Минимум 6 символов" },
                  })} type="password" placeholder="Password..."/>
                {errors.password && (
                  <span className="text-red-500 text-sm font-medium">{errors.password?.message}</span>
                )}
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Button form="submit-form" type="submit" className="bg-green-600 hover:bg-green-700 w-full">Login</Button>
            <NavLink className='w-full' to="/">
              <Button className="w-full" variant="outline">Cancel</Button>
            </NavLink>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
