<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;


class ApiTokenController extends Controller
{
    public function update(Request $request)
    {

        //  $token = $request->user()->createToken('Authorization');
        // Cookie::queue("Authorization", $token->plainTextToken);

        // return ['Authorization' => $token->plainTextToken];


        // $token = Str::random(60);

        // $request->user()->forceFill([
        //     'api_token' => hash('sha256', $token),
        // ])->save();
        // Cookie::queue("api_token", $token);
        // echo($token);
        // return ['token' => $token];
    }
}
