import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form"
import { supabase } from "@/lib/supbase";
import { useState } from "react";
import { StepBack } from "lucide-react";
import { useTranslation } from "react-i18next";

type RegisterFormValues = {
  name: string
  email: string
  password: string
}

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate()
  
  const [authError, setAuthError] = useState({
    error: false,
    msg: ''
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<RegisterFormValues>({
    defaultValues:{
        name: '',
        email: '',
        password: ''
    }
  })

  const onSubmit = async(data:RegisterFormValues) => {
    setAuthError({error: false, msg: ""})
    const {data:authData, error} = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
            data:{
                name: data.name,
            },
        },
    })
    if(error) {
        console.error(error)
        setAuthError({error: true, msg: error.message})
    }
    else {
      if(authData.session) {
        navigate('/')
        reset()
      }
    }
  }
  
  return (
    <>
      <div className="flex items-center justify-center px-5 py-10 lg:py-30">
        <Card className="max-w-lg w-full">
          {authError.error ? <h1 className="text-xl text-center font-semibold text-red-600">{t("auth.errorPrefix")} {authError.msg}</h1> : ""}
          <CardHeader>
            <CardTitle>{t("auth.registerTitle")}</CardTitle>
            <CardDescription>{t("auth.registerDesc")}</CardDescription>
            <CardAction>
              <NavLink to="/"><Button className="text-lg" variant="link"><StepBack /> {t("auth.return")}</Button></NavLink>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form
             id="submit-form"
             onSubmit={handleSubmit(onSubmit)}
             className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <label className="text-xl font-semibold">{t("auth.nameLabel")}</label>
                <Input {...register('name', 
                    {
                      required: t("auth.validation.nameRequired"),
                      minLength: {value: 4, message: t("auth.validation.nameMin")}  
                    })} placeholder={t("auth.namePlaceholder")}/>
                {errors.name && (
                    <span className="text-red-500 text-sm font-medium">{errors.name.message}</span>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xl font-semibold">{t("auth.emailLabel")}</label>
                <Input {...register('email', 
                    {
                      required: t("auth.validation.emailRequired"),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("auth.validation.emailInvalid"),
                      }
                    })} placeholder={t("auth.emailPlaceholder")}/>
                    {errors.email && (
                        <span className="text-red-500 text-sm font-medium">{errors.email?.message}</span>
                    )}
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xl font-semibold">{t("auth.passwordLabel")}</label>
                <Input {...register("password", {
                      required: t("auth.validation.passwordRequired"),
                      minLength: { value: 6, message: t("auth.validation.passwordMin") },
                  })} type="password" placeholder={t("auth.passwordPlaceholder")}/>
                {errors.password && (
                  <span className="text-red-500 text-sm font-medium">{errors.password?.message}</span>
                )}
              </div>
            </form>
          </CardContent>
          <div className="flex justify-center items-center">
            <p>{t("auth.alreadyHaveAccount")}</p>
            <NavLink to="/login"><Button className="text-[17px]" variant="link">{t("auth.login")}</Button></NavLink>
          </div>
          <CardFooter className="flex-col gap-4">
            <Button form="submit-form" type="submit" className="bg-green-600 hover:bg-green-700 w-full">{t("auth.signUp")}</Button>
            <NavLink className='w-full' to="/">
              <Button className="w-full" variant="outline">{t("auth.cancel")}</Button>
            </NavLink>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}