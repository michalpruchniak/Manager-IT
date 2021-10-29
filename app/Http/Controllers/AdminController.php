<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UserRequest;
use Error;
class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware(function ($request, $next) {

            if(Auth::user()->role == 3){
                return $next($request);
            } else {
                throw new Error("Nie masz uprawnień do wykonania tej akcji");
            }

        });
    }
    public function storeUser(UserRequest $request){
        try{
            $user = new User;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
            return $user;
        } catch(Error $error) {
            return $error;
        }


    }

    public function changeRole($role, $userID){
        $user = User::find($userID);
        $user->role = $role;
        $user->save();
    }
}
