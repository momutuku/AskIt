<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $root = User::create(
            [
                'email' => 'moses@email.com',
                'password' => bcrypt('mosesPassword'),
                'name' => 'Moses Mutuku',
            ]
        );
    }
}
