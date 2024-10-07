import MainLayout from "@/components/MainLayout";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Home from "@/pages/home";
import InternList from "@/pages/intern/intern-list";
import InternForm from "@/pages/intern/intern-operations";
import NotFound from "@/pages/not-found";
import PermissionCreate from "@/pages/permissioon/permission-create";
import PermissionList from "@/pages/permissioon/permission-list";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout message="Hoş geldiniz,"><Home /></MainLayout>
    },
    {
        path: '/intern/intern-list',
        element: <MainLayout message="Stajyer Listesi"><InternList /></MainLayout>
    },
    {
        path: '/intern/intern-details/:id',
        element: <MainLayout message="Stajyer Kaydı - Detay"><InternForm /></MainLayout>
    },
    {
        path: '/intern/intern-create',
        element: <MainLayout message="Stajyer Kaydı - Yeni"><InternForm /></MainLayout>
    },
    {
        path: '/permission/permission-create',
        element: <MainLayout message="İzin Formu - Yeni"><PermissionCreate /></MainLayout>
    }
    ,
    {
        path: '/permission/permission-list',
        element: <MainLayout message="İzin Formu - Listesi"><PermissionList /></MainLayout>
    }
    ,
    {
        path: '/auth/register',
        element: <MainLayout message="Kayıt Ol"><Register /></MainLayout>
    }
    ,
    {
        path: '/auth/login',
        element: <MainLayout message="Giriş Yap"><Login /></MainLayout>
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default routes;