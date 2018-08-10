<?php

use Illuminate\Database\Seeder;

class PaymentTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['name'=> 'Cash'],
            ['name'=> 'Cheque'],
            ['name'=> 'Debit Card'],
            ['name'=> 'Credit Card'],
            ['name'=> 'E-Payment']
        ];

        \App\Models\PaymentType::insert($data);
    }
}
