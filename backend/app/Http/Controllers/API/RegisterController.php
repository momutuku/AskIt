<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'name' => 'required',
            'password' => 'required|confirmed|min:10',
        ]);

        if ($validation->fails()) {
            return $this->sendErrorResponse($validation->errors());
        }

        $user_info = $request->all();
        $user_info['password'] = bcrypt($request->password);

        $user = User::create($user_info);
        $response['token'] = $user->createToken('token')->accessToken;
        $response['name'] = $user->name;

        return $this->sendSuccessResponse($response, "User Created");
    }

    public function login(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'email' => 'required|email|exists:users',
            'password' => 'required',
        ]);

        if ($validation->fails()) {
            return $this->sendErrorResponse($validation->errors());
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $response['token'] = $user->createToken('token')->accessToken;
            $response['name'] = $user->name;
            return $this->sendSuccessResponse($response, "Success");
        } else {
            return $this->sendErrorResponse('Invalid Username/password');
        }
    }
}
