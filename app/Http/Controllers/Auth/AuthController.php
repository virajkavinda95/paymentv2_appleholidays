<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Database\Seeder;

class AuthController extends Controller
{

    public $user;

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
        $this->user = new User();
    }

    public function getAuthUser()
    {
        return response([
            'status' => 200,
            'user' => auth()->user()
        ]);
    }

    public function login()
    {
        try {
            $credentials = request(['email', 'password']);

            // return $token;

            if (!$token = auth()->attempt($credentials)) {
                return response([
                    'status' => 401,
                    'message' => 'Unauthorized'
                ]);
            }

            return $this->respondWithToken($token);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    public function register()
    {
        $credentials = request(['name', 'email', 'password', 'role']);
        $credentials['password'] = bcrypt($credentials['password']);


        $response = $this->user->createUser($credentials);

        return $response;
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'status' => 200,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => 60 * 60,
            'user' => auth()->user()
        ]);
    }
}
