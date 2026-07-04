
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model NhanVien
 * 
 */
export type NhanVien = $Result.DefaultSelection<Prisma.$NhanVienPayload>
/**
 * Model KhoHang
 * 
 */
export type KhoHang = $Result.DefaultSelection<Prisma.$KhoHangPayload>
/**
 * Model Sach
 * 
 */
export type Sach = $Result.DefaultSelection<Prisma.$SachPayload>
/**
 * Model GiaoDichKho
 * 
 */
export type GiaoDichKho = $Result.DefaultSelection<Prisma.$GiaoDichKhoPayload>
/**
 * Model TonKho
 * 
 */
export type TonKho = $Result.DefaultSelection<Prisma.$TonKhoPayload>
/**
 * Model DonHang
 * 
 */
export type DonHang = $Result.DefaultSelection<Prisma.$DonHangPayload>
/**
 * Model ChiTietDonHang
 * 
 */
export type ChiTietDonHang = $Result.DefaultSelection<Prisma.$ChiTietDonHangPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ChucVu: {
  QUAN_LY: 'QUAN_LY',
  THU_NGAN: 'THU_NGAN',
  THU_KHO: 'THU_KHO'
};

export type ChucVu = (typeof ChucVu)[keyof typeof ChucVu]


export const LoaiGiaoDich: {
  NHAP: 'NHAP',
  XUAT: 'XUAT'
};

export type LoaiGiaoDich = (typeof LoaiGiaoDich)[keyof typeof LoaiGiaoDich]


export const TrangThaiSach: {
  KHONG_BAN: 'KHONG_BAN',
  CON_HANG: 'CON_HANG',
  HET_HANG: 'HET_HANG',
  TON_KHO_QUA_MUC: 'TON_KHO_QUA_MUC',
  NGUNG_BAN: 'NGUNG_BAN'
};

export type TrangThaiSach = (typeof TrangThaiSach)[keyof typeof TrangThaiSach]


export const TrangThaiDonHang: {
  CHO_XU_LY: 'CHO_XU_LY',
  HOAN_THANH: 'HOAN_THANH',
  DA_HUY: 'DA_HUY'
};

export type TrangThaiDonHang = (typeof TrangThaiDonHang)[keyof typeof TrangThaiDonHang]

}

export type ChucVu = $Enums.ChucVu

export const ChucVu: typeof $Enums.ChucVu

export type LoaiGiaoDich = $Enums.LoaiGiaoDich

export const LoaiGiaoDich: typeof $Enums.LoaiGiaoDich

export type TrangThaiSach = $Enums.TrangThaiSach

export const TrangThaiSach: typeof $Enums.TrangThaiSach

export type TrangThaiDonHang = $Enums.TrangThaiDonHang

export const TrangThaiDonHang: typeof $Enums.TrangThaiDonHang

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more NhanViens
 * const nhanViens = await prisma.nhanVien.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more NhanViens
   * const nhanViens = await prisma.nhanVien.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.nhanVien`: Exposes CRUD operations for the **NhanVien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NhanViens
    * const nhanViens = await prisma.nhanVien.findMany()
    * ```
    */
  get nhanVien(): Prisma.NhanVienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.khoHang`: Exposes CRUD operations for the **KhoHang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KhoHangs
    * const khoHangs = await prisma.khoHang.findMany()
    * ```
    */
  get khoHang(): Prisma.KhoHangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sach`: Exposes CRUD operations for the **Sach** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saches
    * const saches = await prisma.sach.findMany()
    * ```
    */
  get sach(): Prisma.SachDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.giaoDichKho`: Exposes CRUD operations for the **GiaoDichKho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GiaoDichKhos
    * const giaoDichKhos = await prisma.giaoDichKho.findMany()
    * ```
    */
  get giaoDichKho(): Prisma.GiaoDichKhoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tonKho`: Exposes CRUD operations for the **TonKho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TonKhos
    * const tonKhos = await prisma.tonKho.findMany()
    * ```
    */
  get tonKho(): Prisma.TonKhoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donHang`: Exposes CRUD operations for the **DonHang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonHangs
    * const donHangs = await prisma.donHang.findMany()
    * ```
    */
  get donHang(): Prisma.DonHangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chiTietDonHang`: Exposes CRUD operations for the **ChiTietDonHang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChiTietDonHangs
    * const chiTietDonHangs = await prisma.chiTietDonHang.findMany()
    * ```
    */
  get chiTietDonHang(): Prisma.ChiTietDonHangDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    NhanVien: 'NhanVien',
    KhoHang: 'KhoHang',
    Sach: 'Sach',
    GiaoDichKho: 'GiaoDichKho',
    TonKho: 'TonKho',
    DonHang: 'DonHang',
    ChiTietDonHang: 'ChiTietDonHang'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "nhanVien" | "khoHang" | "sach" | "giaoDichKho" | "tonKho" | "donHang" | "chiTietDonHang"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NhanVien: {
        payload: Prisma.$NhanVienPayload<ExtArgs>
        fields: Prisma.NhanVienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NhanVienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhanVienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NhanVienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhanVienPayload>
          }
          findFirst: {
            args: Prisma.NhanVienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhanVienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NhanVienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhanVienPayload>
          }
          findMany: {
            args: Prisma.NhanVienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhanVienPayload>[]
          }
          create: {
            args: Prisma.NhanVienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhanVienPayload>
          }
          createMany: {
            args: Prisma.NhanVienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NhanVienCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhanVienPayload>[]
          }
          delete: {
            args: Prisma.NhanVienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhanVienPayload>
          }
          update: {
            args: Prisma.NhanVienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhanVienPayload>
          }
          deleteMany: {
            args: Prisma.NhanVienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NhanVienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NhanVienUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhanVienPayload>[]
          }
          upsert: {
            args: Prisma.NhanVienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhanVienPayload>
          }
          aggregate: {
            args: Prisma.NhanVienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNhanVien>
          }
          groupBy: {
            args: Prisma.NhanVienGroupByArgs<ExtArgs>
            result: $Utils.Optional<NhanVienGroupByOutputType>[]
          }
          count: {
            args: Prisma.NhanVienCountArgs<ExtArgs>
            result: $Utils.Optional<NhanVienCountAggregateOutputType> | number
          }
        }
      }
      KhoHang: {
        payload: Prisma.$KhoHangPayload<ExtArgs>
        fields: Prisma.KhoHangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KhoHangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhoHangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KhoHangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhoHangPayload>
          }
          findFirst: {
            args: Prisma.KhoHangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhoHangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KhoHangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhoHangPayload>
          }
          findMany: {
            args: Prisma.KhoHangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhoHangPayload>[]
          }
          create: {
            args: Prisma.KhoHangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhoHangPayload>
          }
          createMany: {
            args: Prisma.KhoHangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KhoHangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhoHangPayload>[]
          }
          delete: {
            args: Prisma.KhoHangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhoHangPayload>
          }
          update: {
            args: Prisma.KhoHangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhoHangPayload>
          }
          deleteMany: {
            args: Prisma.KhoHangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KhoHangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KhoHangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhoHangPayload>[]
          }
          upsert: {
            args: Prisma.KhoHangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhoHangPayload>
          }
          aggregate: {
            args: Prisma.KhoHangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKhoHang>
          }
          groupBy: {
            args: Prisma.KhoHangGroupByArgs<ExtArgs>
            result: $Utils.Optional<KhoHangGroupByOutputType>[]
          }
          count: {
            args: Prisma.KhoHangCountArgs<ExtArgs>
            result: $Utils.Optional<KhoHangCountAggregateOutputType> | number
          }
        }
      }
      Sach: {
        payload: Prisma.$SachPayload<ExtArgs>
        fields: Prisma.SachFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SachFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SachPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SachFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SachPayload>
          }
          findFirst: {
            args: Prisma.SachFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SachPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SachFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SachPayload>
          }
          findMany: {
            args: Prisma.SachFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SachPayload>[]
          }
          create: {
            args: Prisma.SachCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SachPayload>
          }
          createMany: {
            args: Prisma.SachCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SachCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SachPayload>[]
          }
          delete: {
            args: Prisma.SachDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SachPayload>
          }
          update: {
            args: Prisma.SachUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SachPayload>
          }
          deleteMany: {
            args: Prisma.SachDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SachUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SachUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SachPayload>[]
          }
          upsert: {
            args: Prisma.SachUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SachPayload>
          }
          aggregate: {
            args: Prisma.SachAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSach>
          }
          groupBy: {
            args: Prisma.SachGroupByArgs<ExtArgs>
            result: $Utils.Optional<SachGroupByOutputType>[]
          }
          count: {
            args: Prisma.SachCountArgs<ExtArgs>
            result: $Utils.Optional<SachCountAggregateOutputType> | number
          }
        }
      }
      GiaoDichKho: {
        payload: Prisma.$GiaoDichKhoPayload<ExtArgs>
        fields: Prisma.GiaoDichKhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GiaoDichKhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichKhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GiaoDichKhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichKhoPayload>
          }
          findFirst: {
            args: Prisma.GiaoDichKhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichKhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GiaoDichKhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichKhoPayload>
          }
          findMany: {
            args: Prisma.GiaoDichKhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichKhoPayload>[]
          }
          create: {
            args: Prisma.GiaoDichKhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichKhoPayload>
          }
          createMany: {
            args: Prisma.GiaoDichKhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GiaoDichKhoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichKhoPayload>[]
          }
          delete: {
            args: Prisma.GiaoDichKhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichKhoPayload>
          }
          update: {
            args: Prisma.GiaoDichKhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichKhoPayload>
          }
          deleteMany: {
            args: Prisma.GiaoDichKhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GiaoDichKhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GiaoDichKhoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichKhoPayload>[]
          }
          upsert: {
            args: Prisma.GiaoDichKhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichKhoPayload>
          }
          aggregate: {
            args: Prisma.GiaoDichKhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGiaoDichKho>
          }
          groupBy: {
            args: Prisma.GiaoDichKhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GiaoDichKhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GiaoDichKhoCountArgs<ExtArgs>
            result: $Utils.Optional<GiaoDichKhoCountAggregateOutputType> | number
          }
        }
      }
      TonKho: {
        payload: Prisma.$TonKhoPayload<ExtArgs>
        fields: Prisma.TonKhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TonKhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TonKhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TonKhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TonKhoPayload>
          }
          findFirst: {
            args: Prisma.TonKhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TonKhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TonKhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TonKhoPayload>
          }
          findMany: {
            args: Prisma.TonKhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TonKhoPayload>[]
          }
          create: {
            args: Prisma.TonKhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TonKhoPayload>
          }
          createMany: {
            args: Prisma.TonKhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TonKhoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TonKhoPayload>[]
          }
          delete: {
            args: Prisma.TonKhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TonKhoPayload>
          }
          update: {
            args: Prisma.TonKhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TonKhoPayload>
          }
          deleteMany: {
            args: Prisma.TonKhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TonKhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TonKhoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TonKhoPayload>[]
          }
          upsert: {
            args: Prisma.TonKhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TonKhoPayload>
          }
          aggregate: {
            args: Prisma.TonKhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTonKho>
          }
          groupBy: {
            args: Prisma.TonKhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TonKhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TonKhoCountArgs<ExtArgs>
            result: $Utils.Optional<TonKhoCountAggregateOutputType> | number
          }
        }
      }
      DonHang: {
        payload: Prisma.$DonHangPayload<ExtArgs>
        fields: Prisma.DonHangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonHangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonHangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonHangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonHangPayload>
          }
          findFirst: {
            args: Prisma.DonHangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonHangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonHangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonHangPayload>
          }
          findMany: {
            args: Prisma.DonHangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonHangPayload>[]
          }
          create: {
            args: Prisma.DonHangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonHangPayload>
          }
          createMany: {
            args: Prisma.DonHangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonHangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonHangPayload>[]
          }
          delete: {
            args: Prisma.DonHangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonHangPayload>
          }
          update: {
            args: Prisma.DonHangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonHangPayload>
          }
          deleteMany: {
            args: Prisma.DonHangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonHangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonHangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonHangPayload>[]
          }
          upsert: {
            args: Prisma.DonHangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonHangPayload>
          }
          aggregate: {
            args: Prisma.DonHangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonHang>
          }
          groupBy: {
            args: Prisma.DonHangGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonHangGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonHangCountArgs<ExtArgs>
            result: $Utils.Optional<DonHangCountAggregateOutputType> | number
          }
        }
      }
      ChiTietDonHang: {
        payload: Prisma.$ChiTietDonHangPayload<ExtArgs>
        fields: Prisma.ChiTietDonHangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChiTietDonHangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDonHangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChiTietDonHangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDonHangPayload>
          }
          findFirst: {
            args: Prisma.ChiTietDonHangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDonHangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChiTietDonHangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDonHangPayload>
          }
          findMany: {
            args: Prisma.ChiTietDonHangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDonHangPayload>[]
          }
          create: {
            args: Prisma.ChiTietDonHangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDonHangPayload>
          }
          createMany: {
            args: Prisma.ChiTietDonHangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChiTietDonHangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDonHangPayload>[]
          }
          delete: {
            args: Prisma.ChiTietDonHangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDonHangPayload>
          }
          update: {
            args: Prisma.ChiTietDonHangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDonHangPayload>
          }
          deleteMany: {
            args: Prisma.ChiTietDonHangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChiTietDonHangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChiTietDonHangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDonHangPayload>[]
          }
          upsert: {
            args: Prisma.ChiTietDonHangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDonHangPayload>
          }
          aggregate: {
            args: Prisma.ChiTietDonHangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChiTietDonHang>
          }
          groupBy: {
            args: Prisma.ChiTietDonHangGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChiTietDonHangGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChiTietDonHangCountArgs<ExtArgs>
            result: $Utils.Optional<ChiTietDonHangCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    nhanVien?: NhanVienOmit
    khoHang?: KhoHangOmit
    sach?: SachOmit
    giaoDichKho?: GiaoDichKhoOmit
    tonKho?: TonKhoOmit
    donHang?: DonHangOmit
    chiTietDonHang?: ChiTietDonHangOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NhanVienCountOutputType
   */

  export type NhanVienCountOutputType = {
    giaoDichKho: number
    donHang: number
  }

  export type NhanVienCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    giaoDichKho?: boolean | NhanVienCountOutputTypeCountGiaoDichKhoArgs
    donHang?: boolean | NhanVienCountOutputTypeCountDonHangArgs
  }

  // Custom InputTypes
  /**
   * NhanVienCountOutputType without action
   */
  export type NhanVienCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhanVienCountOutputType
     */
    select?: NhanVienCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NhanVienCountOutputType without action
   */
  export type NhanVienCountOutputTypeCountGiaoDichKhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiaoDichKhoWhereInput
  }

  /**
   * NhanVienCountOutputType without action
   */
  export type NhanVienCountOutputTypeCountDonHangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonHangWhereInput
  }


  /**
   * Count Type KhoHangCountOutputType
   */

  export type KhoHangCountOutputType = {
    giaoDichKho: number
    tonKho: number
  }

  export type KhoHangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    giaoDichKho?: boolean | KhoHangCountOutputTypeCountGiaoDichKhoArgs
    tonKho?: boolean | KhoHangCountOutputTypeCountTonKhoArgs
  }

  // Custom InputTypes
  /**
   * KhoHangCountOutputType without action
   */
  export type KhoHangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhoHangCountOutputType
     */
    select?: KhoHangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KhoHangCountOutputType without action
   */
  export type KhoHangCountOutputTypeCountGiaoDichKhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiaoDichKhoWhereInput
  }

  /**
   * KhoHangCountOutputType without action
   */
  export type KhoHangCountOutputTypeCountTonKhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TonKhoWhereInput
  }


  /**
   * Count Type SachCountOutputType
   */

  export type SachCountOutputType = {
    giaoDichKho: number
    tonKho: number
    chiTietDonHang: number
  }

  export type SachCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    giaoDichKho?: boolean | SachCountOutputTypeCountGiaoDichKhoArgs
    tonKho?: boolean | SachCountOutputTypeCountTonKhoArgs
    chiTietDonHang?: boolean | SachCountOutputTypeCountChiTietDonHangArgs
  }

  // Custom InputTypes
  /**
   * SachCountOutputType without action
   */
  export type SachCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SachCountOutputType
     */
    select?: SachCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SachCountOutputType without action
   */
  export type SachCountOutputTypeCountGiaoDichKhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiaoDichKhoWhereInput
  }

  /**
   * SachCountOutputType without action
   */
  export type SachCountOutputTypeCountTonKhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TonKhoWhereInput
  }

  /**
   * SachCountOutputType without action
   */
  export type SachCountOutputTypeCountChiTietDonHangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChiTietDonHangWhereInput
  }


  /**
   * Count Type DonHangCountOutputType
   */

  export type DonHangCountOutputType = {
    chiTiet: number
  }

  export type DonHangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chiTiet?: boolean | DonHangCountOutputTypeCountChiTietArgs
  }

  // Custom InputTypes
  /**
   * DonHangCountOutputType without action
   */
  export type DonHangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHangCountOutputType
     */
    select?: DonHangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DonHangCountOutputType without action
   */
  export type DonHangCountOutputTypeCountChiTietArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChiTietDonHangWhereInput
  }


  /**
   * Models
   */

  /**
   * Model NhanVien
   */

  export type AggregateNhanVien = {
    _count: NhanVienCountAggregateOutputType | null
    _min: NhanVienMinAggregateOutputType | null
    _max: NhanVienMaxAggregateOutputType | null
  }

  export type NhanVienMinAggregateOutputType = {
    maNV: string | null
    matKhau: string | null
    hoTen: string | null
    chucVu: $Enums.ChucVu | null
  }

  export type NhanVienMaxAggregateOutputType = {
    maNV: string | null
    matKhau: string | null
    hoTen: string | null
    chucVu: $Enums.ChucVu | null
  }

  export type NhanVienCountAggregateOutputType = {
    maNV: number
    matKhau: number
    hoTen: number
    chucVu: number
    _all: number
  }


  export type NhanVienMinAggregateInputType = {
    maNV?: true
    matKhau?: true
    hoTen?: true
    chucVu?: true
  }

  export type NhanVienMaxAggregateInputType = {
    maNV?: true
    matKhau?: true
    hoTen?: true
    chucVu?: true
  }

  export type NhanVienCountAggregateInputType = {
    maNV?: true
    matKhau?: true
    hoTen?: true
    chucVu?: true
    _all?: true
  }

  export type NhanVienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NhanVien to aggregate.
     */
    where?: NhanVienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NhanViens to fetch.
     */
    orderBy?: NhanVienOrderByWithRelationInput | NhanVienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NhanVienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NhanViens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NhanViens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NhanViens
    **/
    _count?: true | NhanVienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NhanVienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NhanVienMaxAggregateInputType
  }

  export type GetNhanVienAggregateType<T extends NhanVienAggregateArgs> = {
        [P in keyof T & keyof AggregateNhanVien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNhanVien[P]>
      : GetScalarType<T[P], AggregateNhanVien[P]>
  }




  export type NhanVienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NhanVienWhereInput
    orderBy?: NhanVienOrderByWithAggregationInput | NhanVienOrderByWithAggregationInput[]
    by: NhanVienScalarFieldEnum[] | NhanVienScalarFieldEnum
    having?: NhanVienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NhanVienCountAggregateInputType | true
    _min?: NhanVienMinAggregateInputType
    _max?: NhanVienMaxAggregateInputType
  }

  export type NhanVienGroupByOutputType = {
    maNV: string
    matKhau: string
    hoTen: string
    chucVu: $Enums.ChucVu
    _count: NhanVienCountAggregateOutputType | null
    _min: NhanVienMinAggregateOutputType | null
    _max: NhanVienMaxAggregateOutputType | null
  }

  type GetNhanVienGroupByPayload<T extends NhanVienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NhanVienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NhanVienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NhanVienGroupByOutputType[P]>
            : GetScalarType<T[P], NhanVienGroupByOutputType[P]>
        }
      >
    >


  export type NhanVienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maNV?: boolean
    matKhau?: boolean
    hoTen?: boolean
    chucVu?: boolean
    giaoDichKho?: boolean | NhanVien$giaoDichKhoArgs<ExtArgs>
    donHang?: boolean | NhanVien$donHangArgs<ExtArgs>
    _count?: boolean | NhanVienCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nhanVien"]>

  export type NhanVienSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maNV?: boolean
    matKhau?: boolean
    hoTen?: boolean
    chucVu?: boolean
  }, ExtArgs["result"]["nhanVien"]>

  export type NhanVienSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maNV?: boolean
    matKhau?: boolean
    hoTen?: boolean
    chucVu?: boolean
  }, ExtArgs["result"]["nhanVien"]>

  export type NhanVienSelectScalar = {
    maNV?: boolean
    matKhau?: boolean
    hoTen?: boolean
    chucVu?: boolean
  }

  export type NhanVienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"maNV" | "matKhau" | "hoTen" | "chucVu", ExtArgs["result"]["nhanVien"]>
  export type NhanVienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    giaoDichKho?: boolean | NhanVien$giaoDichKhoArgs<ExtArgs>
    donHang?: boolean | NhanVien$donHangArgs<ExtArgs>
    _count?: boolean | NhanVienCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NhanVienIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NhanVienIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NhanVienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NhanVien"
    objects: {
      giaoDichKho: Prisma.$GiaoDichKhoPayload<ExtArgs>[]
      donHang: Prisma.$DonHangPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      maNV: string
      matKhau: string
      hoTen: string
      chucVu: $Enums.ChucVu
    }, ExtArgs["result"]["nhanVien"]>
    composites: {}
  }

  type NhanVienGetPayload<S extends boolean | null | undefined | NhanVienDefaultArgs> = $Result.GetResult<Prisma.$NhanVienPayload, S>

  type NhanVienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NhanVienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NhanVienCountAggregateInputType | true
    }

  export interface NhanVienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NhanVien'], meta: { name: 'NhanVien' } }
    /**
     * Find zero or one NhanVien that matches the filter.
     * @param {NhanVienFindUniqueArgs} args - Arguments to find a NhanVien
     * @example
     * // Get one NhanVien
     * const nhanVien = await prisma.nhanVien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NhanVienFindUniqueArgs>(args: SelectSubset<T, NhanVienFindUniqueArgs<ExtArgs>>): Prisma__NhanVienClient<$Result.GetResult<Prisma.$NhanVienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NhanVien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NhanVienFindUniqueOrThrowArgs} args - Arguments to find a NhanVien
     * @example
     * // Get one NhanVien
     * const nhanVien = await prisma.nhanVien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NhanVienFindUniqueOrThrowArgs>(args: SelectSubset<T, NhanVienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NhanVienClient<$Result.GetResult<Prisma.$NhanVienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NhanVien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhanVienFindFirstArgs} args - Arguments to find a NhanVien
     * @example
     * // Get one NhanVien
     * const nhanVien = await prisma.nhanVien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NhanVienFindFirstArgs>(args?: SelectSubset<T, NhanVienFindFirstArgs<ExtArgs>>): Prisma__NhanVienClient<$Result.GetResult<Prisma.$NhanVienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NhanVien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhanVienFindFirstOrThrowArgs} args - Arguments to find a NhanVien
     * @example
     * // Get one NhanVien
     * const nhanVien = await prisma.nhanVien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NhanVienFindFirstOrThrowArgs>(args?: SelectSubset<T, NhanVienFindFirstOrThrowArgs<ExtArgs>>): Prisma__NhanVienClient<$Result.GetResult<Prisma.$NhanVienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NhanViens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhanVienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NhanViens
     * const nhanViens = await prisma.nhanVien.findMany()
     * 
     * // Get first 10 NhanViens
     * const nhanViens = await prisma.nhanVien.findMany({ take: 10 })
     * 
     * // Only select the `maNV`
     * const nhanVienWithMaNVOnly = await prisma.nhanVien.findMany({ select: { maNV: true } })
     * 
     */
    findMany<T extends NhanVienFindManyArgs>(args?: SelectSubset<T, NhanVienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NhanVienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NhanVien.
     * @param {NhanVienCreateArgs} args - Arguments to create a NhanVien.
     * @example
     * // Create one NhanVien
     * const NhanVien = await prisma.nhanVien.create({
     *   data: {
     *     // ... data to create a NhanVien
     *   }
     * })
     * 
     */
    create<T extends NhanVienCreateArgs>(args: SelectSubset<T, NhanVienCreateArgs<ExtArgs>>): Prisma__NhanVienClient<$Result.GetResult<Prisma.$NhanVienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NhanViens.
     * @param {NhanVienCreateManyArgs} args - Arguments to create many NhanViens.
     * @example
     * // Create many NhanViens
     * const nhanVien = await prisma.nhanVien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NhanVienCreateManyArgs>(args?: SelectSubset<T, NhanVienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NhanViens and returns the data saved in the database.
     * @param {NhanVienCreateManyAndReturnArgs} args - Arguments to create many NhanViens.
     * @example
     * // Create many NhanViens
     * const nhanVien = await prisma.nhanVien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NhanViens and only return the `maNV`
     * const nhanVienWithMaNVOnly = await prisma.nhanVien.createManyAndReturn({
     *   select: { maNV: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NhanVienCreateManyAndReturnArgs>(args?: SelectSubset<T, NhanVienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NhanVienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NhanVien.
     * @param {NhanVienDeleteArgs} args - Arguments to delete one NhanVien.
     * @example
     * // Delete one NhanVien
     * const NhanVien = await prisma.nhanVien.delete({
     *   where: {
     *     // ... filter to delete one NhanVien
     *   }
     * })
     * 
     */
    delete<T extends NhanVienDeleteArgs>(args: SelectSubset<T, NhanVienDeleteArgs<ExtArgs>>): Prisma__NhanVienClient<$Result.GetResult<Prisma.$NhanVienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NhanVien.
     * @param {NhanVienUpdateArgs} args - Arguments to update one NhanVien.
     * @example
     * // Update one NhanVien
     * const nhanVien = await prisma.nhanVien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NhanVienUpdateArgs>(args: SelectSubset<T, NhanVienUpdateArgs<ExtArgs>>): Prisma__NhanVienClient<$Result.GetResult<Prisma.$NhanVienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NhanViens.
     * @param {NhanVienDeleteManyArgs} args - Arguments to filter NhanViens to delete.
     * @example
     * // Delete a few NhanViens
     * const { count } = await prisma.nhanVien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NhanVienDeleteManyArgs>(args?: SelectSubset<T, NhanVienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NhanViens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhanVienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NhanViens
     * const nhanVien = await prisma.nhanVien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NhanVienUpdateManyArgs>(args: SelectSubset<T, NhanVienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NhanViens and returns the data updated in the database.
     * @param {NhanVienUpdateManyAndReturnArgs} args - Arguments to update many NhanViens.
     * @example
     * // Update many NhanViens
     * const nhanVien = await prisma.nhanVien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NhanViens and only return the `maNV`
     * const nhanVienWithMaNVOnly = await prisma.nhanVien.updateManyAndReturn({
     *   select: { maNV: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NhanVienUpdateManyAndReturnArgs>(args: SelectSubset<T, NhanVienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NhanVienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NhanVien.
     * @param {NhanVienUpsertArgs} args - Arguments to update or create a NhanVien.
     * @example
     * // Update or create a NhanVien
     * const nhanVien = await prisma.nhanVien.upsert({
     *   create: {
     *     // ... data to create a NhanVien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NhanVien we want to update
     *   }
     * })
     */
    upsert<T extends NhanVienUpsertArgs>(args: SelectSubset<T, NhanVienUpsertArgs<ExtArgs>>): Prisma__NhanVienClient<$Result.GetResult<Prisma.$NhanVienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NhanViens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhanVienCountArgs} args - Arguments to filter NhanViens to count.
     * @example
     * // Count the number of NhanViens
     * const count = await prisma.nhanVien.count({
     *   where: {
     *     // ... the filter for the NhanViens we want to count
     *   }
     * })
    **/
    count<T extends NhanVienCountArgs>(
      args?: Subset<T, NhanVienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NhanVienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NhanVien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhanVienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NhanVienAggregateArgs>(args: Subset<T, NhanVienAggregateArgs>): Prisma.PrismaPromise<GetNhanVienAggregateType<T>>

    /**
     * Group by NhanVien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhanVienGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NhanVienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NhanVienGroupByArgs['orderBy'] }
        : { orderBy?: NhanVienGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NhanVienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNhanVienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NhanVien model
   */
  readonly fields: NhanVienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NhanVien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NhanVienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    giaoDichKho<T extends NhanVien$giaoDichKhoArgs<ExtArgs> = {}>(args?: Subset<T, NhanVien$giaoDichKhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donHang<T extends NhanVien$donHangArgs<ExtArgs> = {}>(args?: Subset<T, NhanVien$donHangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonHangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NhanVien model
   */
  interface NhanVienFieldRefs {
    readonly maNV: FieldRef<"NhanVien", 'String'>
    readonly matKhau: FieldRef<"NhanVien", 'String'>
    readonly hoTen: FieldRef<"NhanVien", 'String'>
    readonly chucVu: FieldRef<"NhanVien", 'ChucVu'>
  }
    

  // Custom InputTypes
  /**
   * NhanVien findUnique
   */
  export type NhanVienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhanVien
     */
    select?: NhanVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhanVien
     */
    omit?: NhanVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhanVienInclude<ExtArgs> | null
    /**
     * Filter, which NhanVien to fetch.
     */
    where: NhanVienWhereUniqueInput
  }

  /**
   * NhanVien findUniqueOrThrow
   */
  export type NhanVienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhanVien
     */
    select?: NhanVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhanVien
     */
    omit?: NhanVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhanVienInclude<ExtArgs> | null
    /**
     * Filter, which NhanVien to fetch.
     */
    where: NhanVienWhereUniqueInput
  }

  /**
   * NhanVien findFirst
   */
  export type NhanVienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhanVien
     */
    select?: NhanVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhanVien
     */
    omit?: NhanVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhanVienInclude<ExtArgs> | null
    /**
     * Filter, which NhanVien to fetch.
     */
    where?: NhanVienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NhanViens to fetch.
     */
    orderBy?: NhanVienOrderByWithRelationInput | NhanVienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NhanViens.
     */
    cursor?: NhanVienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NhanViens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NhanViens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NhanViens.
     */
    distinct?: NhanVienScalarFieldEnum | NhanVienScalarFieldEnum[]
  }

  /**
   * NhanVien findFirstOrThrow
   */
  export type NhanVienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhanVien
     */
    select?: NhanVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhanVien
     */
    omit?: NhanVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhanVienInclude<ExtArgs> | null
    /**
     * Filter, which NhanVien to fetch.
     */
    where?: NhanVienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NhanViens to fetch.
     */
    orderBy?: NhanVienOrderByWithRelationInput | NhanVienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NhanViens.
     */
    cursor?: NhanVienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NhanViens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NhanViens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NhanViens.
     */
    distinct?: NhanVienScalarFieldEnum | NhanVienScalarFieldEnum[]
  }

  /**
   * NhanVien findMany
   */
  export type NhanVienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhanVien
     */
    select?: NhanVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhanVien
     */
    omit?: NhanVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhanVienInclude<ExtArgs> | null
    /**
     * Filter, which NhanViens to fetch.
     */
    where?: NhanVienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NhanViens to fetch.
     */
    orderBy?: NhanVienOrderByWithRelationInput | NhanVienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NhanViens.
     */
    cursor?: NhanVienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NhanViens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NhanViens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NhanViens.
     */
    distinct?: NhanVienScalarFieldEnum | NhanVienScalarFieldEnum[]
  }

  /**
   * NhanVien create
   */
  export type NhanVienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhanVien
     */
    select?: NhanVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhanVien
     */
    omit?: NhanVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhanVienInclude<ExtArgs> | null
    /**
     * The data needed to create a NhanVien.
     */
    data: XOR<NhanVienCreateInput, NhanVienUncheckedCreateInput>
  }

  /**
   * NhanVien createMany
   */
  export type NhanVienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NhanViens.
     */
    data: NhanVienCreateManyInput | NhanVienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NhanVien createManyAndReturn
   */
  export type NhanVienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhanVien
     */
    select?: NhanVienSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NhanVien
     */
    omit?: NhanVienOmit<ExtArgs> | null
    /**
     * The data used to create many NhanViens.
     */
    data: NhanVienCreateManyInput | NhanVienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NhanVien update
   */
  export type NhanVienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhanVien
     */
    select?: NhanVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhanVien
     */
    omit?: NhanVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhanVienInclude<ExtArgs> | null
    /**
     * The data needed to update a NhanVien.
     */
    data: XOR<NhanVienUpdateInput, NhanVienUncheckedUpdateInput>
    /**
     * Choose, which NhanVien to update.
     */
    where: NhanVienWhereUniqueInput
  }

  /**
   * NhanVien updateMany
   */
  export type NhanVienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NhanViens.
     */
    data: XOR<NhanVienUpdateManyMutationInput, NhanVienUncheckedUpdateManyInput>
    /**
     * Filter which NhanViens to update
     */
    where?: NhanVienWhereInput
    /**
     * Limit how many NhanViens to update.
     */
    limit?: number
  }

  /**
   * NhanVien updateManyAndReturn
   */
  export type NhanVienUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhanVien
     */
    select?: NhanVienSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NhanVien
     */
    omit?: NhanVienOmit<ExtArgs> | null
    /**
     * The data used to update NhanViens.
     */
    data: XOR<NhanVienUpdateManyMutationInput, NhanVienUncheckedUpdateManyInput>
    /**
     * Filter which NhanViens to update
     */
    where?: NhanVienWhereInput
    /**
     * Limit how many NhanViens to update.
     */
    limit?: number
  }

  /**
   * NhanVien upsert
   */
  export type NhanVienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhanVien
     */
    select?: NhanVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhanVien
     */
    omit?: NhanVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhanVienInclude<ExtArgs> | null
    /**
     * The filter to search for the NhanVien to update in case it exists.
     */
    where: NhanVienWhereUniqueInput
    /**
     * In case the NhanVien found by the `where` argument doesn't exist, create a new NhanVien with this data.
     */
    create: XOR<NhanVienCreateInput, NhanVienUncheckedCreateInput>
    /**
     * In case the NhanVien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NhanVienUpdateInput, NhanVienUncheckedUpdateInput>
  }

  /**
   * NhanVien delete
   */
  export type NhanVienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhanVien
     */
    select?: NhanVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhanVien
     */
    omit?: NhanVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhanVienInclude<ExtArgs> | null
    /**
     * Filter which NhanVien to delete.
     */
    where: NhanVienWhereUniqueInput
  }

  /**
   * NhanVien deleteMany
   */
  export type NhanVienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NhanViens to delete
     */
    where?: NhanVienWhereInput
    /**
     * Limit how many NhanViens to delete.
     */
    limit?: number
  }

  /**
   * NhanVien.giaoDichKho
   */
  export type NhanVien$giaoDichKhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoInclude<ExtArgs> | null
    where?: GiaoDichKhoWhereInput
    orderBy?: GiaoDichKhoOrderByWithRelationInput | GiaoDichKhoOrderByWithRelationInput[]
    cursor?: GiaoDichKhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiaoDichKhoScalarFieldEnum | GiaoDichKhoScalarFieldEnum[]
  }

  /**
   * NhanVien.donHang
   */
  export type NhanVien$donHangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHang
     */
    select?: DonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonHang
     */
    omit?: DonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonHangInclude<ExtArgs> | null
    where?: DonHangWhereInput
    orderBy?: DonHangOrderByWithRelationInput | DonHangOrderByWithRelationInput[]
    cursor?: DonHangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonHangScalarFieldEnum | DonHangScalarFieldEnum[]
  }

  /**
   * NhanVien without action
   */
  export type NhanVienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhanVien
     */
    select?: NhanVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhanVien
     */
    omit?: NhanVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhanVienInclude<ExtArgs> | null
  }


  /**
   * Model KhoHang
   */

  export type AggregateKhoHang = {
    _count: KhoHangCountAggregateOutputType | null
    _min: KhoHangMinAggregateOutputType | null
    _max: KhoHangMaxAggregateOutputType | null
  }

  export type KhoHangMinAggregateOutputType = {
    maKho: string | null
    tenKho: string | null
    diaChi: string | null
    sdt: string | null
  }

  export type KhoHangMaxAggregateOutputType = {
    maKho: string | null
    tenKho: string | null
    diaChi: string | null
    sdt: string | null
  }

  export type KhoHangCountAggregateOutputType = {
    maKho: number
    tenKho: number
    diaChi: number
    sdt: number
    _all: number
  }


  export type KhoHangMinAggregateInputType = {
    maKho?: true
    tenKho?: true
    diaChi?: true
    sdt?: true
  }

  export type KhoHangMaxAggregateInputType = {
    maKho?: true
    tenKho?: true
    diaChi?: true
    sdt?: true
  }

  export type KhoHangCountAggregateInputType = {
    maKho?: true
    tenKho?: true
    diaChi?: true
    sdt?: true
    _all?: true
  }

  export type KhoHangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KhoHang to aggregate.
     */
    where?: KhoHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KhoHangs to fetch.
     */
    orderBy?: KhoHangOrderByWithRelationInput | KhoHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KhoHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KhoHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KhoHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KhoHangs
    **/
    _count?: true | KhoHangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KhoHangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KhoHangMaxAggregateInputType
  }

  export type GetKhoHangAggregateType<T extends KhoHangAggregateArgs> = {
        [P in keyof T & keyof AggregateKhoHang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKhoHang[P]>
      : GetScalarType<T[P], AggregateKhoHang[P]>
  }




  export type KhoHangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KhoHangWhereInput
    orderBy?: KhoHangOrderByWithAggregationInput | KhoHangOrderByWithAggregationInput[]
    by: KhoHangScalarFieldEnum[] | KhoHangScalarFieldEnum
    having?: KhoHangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KhoHangCountAggregateInputType | true
    _min?: KhoHangMinAggregateInputType
    _max?: KhoHangMaxAggregateInputType
  }

  export type KhoHangGroupByOutputType = {
    maKho: string
    tenKho: string
    diaChi: string
    sdt: string | null
    _count: KhoHangCountAggregateOutputType | null
    _min: KhoHangMinAggregateOutputType | null
    _max: KhoHangMaxAggregateOutputType | null
  }

  type GetKhoHangGroupByPayload<T extends KhoHangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KhoHangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KhoHangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KhoHangGroupByOutputType[P]>
            : GetScalarType<T[P], KhoHangGroupByOutputType[P]>
        }
      >
    >


  export type KhoHangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maKho?: boolean
    tenKho?: boolean
    diaChi?: boolean
    sdt?: boolean
    giaoDichKho?: boolean | KhoHang$giaoDichKhoArgs<ExtArgs>
    tonKho?: boolean | KhoHang$tonKhoArgs<ExtArgs>
    _count?: boolean | KhoHangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["khoHang"]>

  export type KhoHangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maKho?: boolean
    tenKho?: boolean
    diaChi?: boolean
    sdt?: boolean
  }, ExtArgs["result"]["khoHang"]>

  export type KhoHangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maKho?: boolean
    tenKho?: boolean
    diaChi?: boolean
    sdt?: boolean
  }, ExtArgs["result"]["khoHang"]>

  export type KhoHangSelectScalar = {
    maKho?: boolean
    tenKho?: boolean
    diaChi?: boolean
    sdt?: boolean
  }

  export type KhoHangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"maKho" | "tenKho" | "diaChi" | "sdt", ExtArgs["result"]["khoHang"]>
  export type KhoHangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    giaoDichKho?: boolean | KhoHang$giaoDichKhoArgs<ExtArgs>
    tonKho?: boolean | KhoHang$tonKhoArgs<ExtArgs>
    _count?: boolean | KhoHangCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KhoHangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KhoHangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KhoHangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KhoHang"
    objects: {
      giaoDichKho: Prisma.$GiaoDichKhoPayload<ExtArgs>[]
      tonKho: Prisma.$TonKhoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      maKho: string
      tenKho: string
      diaChi: string
      sdt: string | null
    }, ExtArgs["result"]["khoHang"]>
    composites: {}
  }

  type KhoHangGetPayload<S extends boolean | null | undefined | KhoHangDefaultArgs> = $Result.GetResult<Prisma.$KhoHangPayload, S>

  type KhoHangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KhoHangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KhoHangCountAggregateInputType | true
    }

  export interface KhoHangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KhoHang'], meta: { name: 'KhoHang' } }
    /**
     * Find zero or one KhoHang that matches the filter.
     * @param {KhoHangFindUniqueArgs} args - Arguments to find a KhoHang
     * @example
     * // Get one KhoHang
     * const khoHang = await prisma.khoHang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KhoHangFindUniqueArgs>(args: SelectSubset<T, KhoHangFindUniqueArgs<ExtArgs>>): Prisma__KhoHangClient<$Result.GetResult<Prisma.$KhoHangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KhoHang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KhoHangFindUniqueOrThrowArgs} args - Arguments to find a KhoHang
     * @example
     * // Get one KhoHang
     * const khoHang = await prisma.khoHang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KhoHangFindUniqueOrThrowArgs>(args: SelectSubset<T, KhoHangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KhoHangClient<$Result.GetResult<Prisma.$KhoHangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KhoHang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhoHangFindFirstArgs} args - Arguments to find a KhoHang
     * @example
     * // Get one KhoHang
     * const khoHang = await prisma.khoHang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KhoHangFindFirstArgs>(args?: SelectSubset<T, KhoHangFindFirstArgs<ExtArgs>>): Prisma__KhoHangClient<$Result.GetResult<Prisma.$KhoHangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KhoHang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhoHangFindFirstOrThrowArgs} args - Arguments to find a KhoHang
     * @example
     * // Get one KhoHang
     * const khoHang = await prisma.khoHang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KhoHangFindFirstOrThrowArgs>(args?: SelectSubset<T, KhoHangFindFirstOrThrowArgs<ExtArgs>>): Prisma__KhoHangClient<$Result.GetResult<Prisma.$KhoHangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KhoHangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhoHangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KhoHangs
     * const khoHangs = await prisma.khoHang.findMany()
     * 
     * // Get first 10 KhoHangs
     * const khoHangs = await prisma.khoHang.findMany({ take: 10 })
     * 
     * // Only select the `maKho`
     * const khoHangWithMaKhoOnly = await prisma.khoHang.findMany({ select: { maKho: true } })
     * 
     */
    findMany<T extends KhoHangFindManyArgs>(args?: SelectSubset<T, KhoHangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KhoHangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KhoHang.
     * @param {KhoHangCreateArgs} args - Arguments to create a KhoHang.
     * @example
     * // Create one KhoHang
     * const KhoHang = await prisma.khoHang.create({
     *   data: {
     *     // ... data to create a KhoHang
     *   }
     * })
     * 
     */
    create<T extends KhoHangCreateArgs>(args: SelectSubset<T, KhoHangCreateArgs<ExtArgs>>): Prisma__KhoHangClient<$Result.GetResult<Prisma.$KhoHangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KhoHangs.
     * @param {KhoHangCreateManyArgs} args - Arguments to create many KhoHangs.
     * @example
     * // Create many KhoHangs
     * const khoHang = await prisma.khoHang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KhoHangCreateManyArgs>(args?: SelectSubset<T, KhoHangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KhoHangs and returns the data saved in the database.
     * @param {KhoHangCreateManyAndReturnArgs} args - Arguments to create many KhoHangs.
     * @example
     * // Create many KhoHangs
     * const khoHang = await prisma.khoHang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KhoHangs and only return the `maKho`
     * const khoHangWithMaKhoOnly = await prisma.khoHang.createManyAndReturn({
     *   select: { maKho: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KhoHangCreateManyAndReturnArgs>(args?: SelectSubset<T, KhoHangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KhoHangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KhoHang.
     * @param {KhoHangDeleteArgs} args - Arguments to delete one KhoHang.
     * @example
     * // Delete one KhoHang
     * const KhoHang = await prisma.khoHang.delete({
     *   where: {
     *     // ... filter to delete one KhoHang
     *   }
     * })
     * 
     */
    delete<T extends KhoHangDeleteArgs>(args: SelectSubset<T, KhoHangDeleteArgs<ExtArgs>>): Prisma__KhoHangClient<$Result.GetResult<Prisma.$KhoHangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KhoHang.
     * @param {KhoHangUpdateArgs} args - Arguments to update one KhoHang.
     * @example
     * // Update one KhoHang
     * const khoHang = await prisma.khoHang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KhoHangUpdateArgs>(args: SelectSubset<T, KhoHangUpdateArgs<ExtArgs>>): Prisma__KhoHangClient<$Result.GetResult<Prisma.$KhoHangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KhoHangs.
     * @param {KhoHangDeleteManyArgs} args - Arguments to filter KhoHangs to delete.
     * @example
     * // Delete a few KhoHangs
     * const { count } = await prisma.khoHang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KhoHangDeleteManyArgs>(args?: SelectSubset<T, KhoHangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KhoHangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhoHangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KhoHangs
     * const khoHang = await prisma.khoHang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KhoHangUpdateManyArgs>(args: SelectSubset<T, KhoHangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KhoHangs and returns the data updated in the database.
     * @param {KhoHangUpdateManyAndReturnArgs} args - Arguments to update many KhoHangs.
     * @example
     * // Update many KhoHangs
     * const khoHang = await prisma.khoHang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KhoHangs and only return the `maKho`
     * const khoHangWithMaKhoOnly = await prisma.khoHang.updateManyAndReturn({
     *   select: { maKho: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KhoHangUpdateManyAndReturnArgs>(args: SelectSubset<T, KhoHangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KhoHangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KhoHang.
     * @param {KhoHangUpsertArgs} args - Arguments to update or create a KhoHang.
     * @example
     * // Update or create a KhoHang
     * const khoHang = await prisma.khoHang.upsert({
     *   create: {
     *     // ... data to create a KhoHang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KhoHang we want to update
     *   }
     * })
     */
    upsert<T extends KhoHangUpsertArgs>(args: SelectSubset<T, KhoHangUpsertArgs<ExtArgs>>): Prisma__KhoHangClient<$Result.GetResult<Prisma.$KhoHangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KhoHangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhoHangCountArgs} args - Arguments to filter KhoHangs to count.
     * @example
     * // Count the number of KhoHangs
     * const count = await prisma.khoHang.count({
     *   where: {
     *     // ... the filter for the KhoHangs we want to count
     *   }
     * })
    **/
    count<T extends KhoHangCountArgs>(
      args?: Subset<T, KhoHangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KhoHangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KhoHang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhoHangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KhoHangAggregateArgs>(args: Subset<T, KhoHangAggregateArgs>): Prisma.PrismaPromise<GetKhoHangAggregateType<T>>

    /**
     * Group by KhoHang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhoHangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KhoHangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KhoHangGroupByArgs['orderBy'] }
        : { orderBy?: KhoHangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KhoHangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKhoHangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KhoHang model
   */
  readonly fields: KhoHangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KhoHang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KhoHangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    giaoDichKho<T extends KhoHang$giaoDichKhoArgs<ExtArgs> = {}>(args?: Subset<T, KhoHang$giaoDichKhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tonKho<T extends KhoHang$tonKhoArgs<ExtArgs> = {}>(args?: Subset<T, KhoHang$tonKhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TonKhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KhoHang model
   */
  interface KhoHangFieldRefs {
    readonly maKho: FieldRef<"KhoHang", 'String'>
    readonly tenKho: FieldRef<"KhoHang", 'String'>
    readonly diaChi: FieldRef<"KhoHang", 'String'>
    readonly sdt: FieldRef<"KhoHang", 'String'>
  }
    

  // Custom InputTypes
  /**
   * KhoHang findUnique
   */
  export type KhoHangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhoHang
     */
    select?: KhoHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhoHang
     */
    omit?: KhoHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhoHangInclude<ExtArgs> | null
    /**
     * Filter, which KhoHang to fetch.
     */
    where: KhoHangWhereUniqueInput
  }

  /**
   * KhoHang findUniqueOrThrow
   */
  export type KhoHangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhoHang
     */
    select?: KhoHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhoHang
     */
    omit?: KhoHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhoHangInclude<ExtArgs> | null
    /**
     * Filter, which KhoHang to fetch.
     */
    where: KhoHangWhereUniqueInput
  }

  /**
   * KhoHang findFirst
   */
  export type KhoHangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhoHang
     */
    select?: KhoHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhoHang
     */
    omit?: KhoHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhoHangInclude<ExtArgs> | null
    /**
     * Filter, which KhoHang to fetch.
     */
    where?: KhoHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KhoHangs to fetch.
     */
    orderBy?: KhoHangOrderByWithRelationInput | KhoHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KhoHangs.
     */
    cursor?: KhoHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KhoHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KhoHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KhoHangs.
     */
    distinct?: KhoHangScalarFieldEnum | KhoHangScalarFieldEnum[]
  }

  /**
   * KhoHang findFirstOrThrow
   */
  export type KhoHangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhoHang
     */
    select?: KhoHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhoHang
     */
    omit?: KhoHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhoHangInclude<ExtArgs> | null
    /**
     * Filter, which KhoHang to fetch.
     */
    where?: KhoHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KhoHangs to fetch.
     */
    orderBy?: KhoHangOrderByWithRelationInput | KhoHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KhoHangs.
     */
    cursor?: KhoHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KhoHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KhoHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KhoHangs.
     */
    distinct?: KhoHangScalarFieldEnum | KhoHangScalarFieldEnum[]
  }

  /**
   * KhoHang findMany
   */
  export type KhoHangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhoHang
     */
    select?: KhoHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhoHang
     */
    omit?: KhoHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhoHangInclude<ExtArgs> | null
    /**
     * Filter, which KhoHangs to fetch.
     */
    where?: KhoHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KhoHangs to fetch.
     */
    orderBy?: KhoHangOrderByWithRelationInput | KhoHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KhoHangs.
     */
    cursor?: KhoHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KhoHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KhoHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KhoHangs.
     */
    distinct?: KhoHangScalarFieldEnum | KhoHangScalarFieldEnum[]
  }

  /**
   * KhoHang create
   */
  export type KhoHangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhoHang
     */
    select?: KhoHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhoHang
     */
    omit?: KhoHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhoHangInclude<ExtArgs> | null
    /**
     * The data needed to create a KhoHang.
     */
    data: XOR<KhoHangCreateInput, KhoHangUncheckedCreateInput>
  }

  /**
   * KhoHang createMany
   */
  export type KhoHangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KhoHangs.
     */
    data: KhoHangCreateManyInput | KhoHangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KhoHang createManyAndReturn
   */
  export type KhoHangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhoHang
     */
    select?: KhoHangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KhoHang
     */
    omit?: KhoHangOmit<ExtArgs> | null
    /**
     * The data used to create many KhoHangs.
     */
    data: KhoHangCreateManyInput | KhoHangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KhoHang update
   */
  export type KhoHangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhoHang
     */
    select?: KhoHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhoHang
     */
    omit?: KhoHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhoHangInclude<ExtArgs> | null
    /**
     * The data needed to update a KhoHang.
     */
    data: XOR<KhoHangUpdateInput, KhoHangUncheckedUpdateInput>
    /**
     * Choose, which KhoHang to update.
     */
    where: KhoHangWhereUniqueInput
  }

  /**
   * KhoHang updateMany
   */
  export type KhoHangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KhoHangs.
     */
    data: XOR<KhoHangUpdateManyMutationInput, KhoHangUncheckedUpdateManyInput>
    /**
     * Filter which KhoHangs to update
     */
    where?: KhoHangWhereInput
    /**
     * Limit how many KhoHangs to update.
     */
    limit?: number
  }

  /**
   * KhoHang updateManyAndReturn
   */
  export type KhoHangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhoHang
     */
    select?: KhoHangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KhoHang
     */
    omit?: KhoHangOmit<ExtArgs> | null
    /**
     * The data used to update KhoHangs.
     */
    data: XOR<KhoHangUpdateManyMutationInput, KhoHangUncheckedUpdateManyInput>
    /**
     * Filter which KhoHangs to update
     */
    where?: KhoHangWhereInput
    /**
     * Limit how many KhoHangs to update.
     */
    limit?: number
  }

  /**
   * KhoHang upsert
   */
  export type KhoHangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhoHang
     */
    select?: KhoHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhoHang
     */
    omit?: KhoHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhoHangInclude<ExtArgs> | null
    /**
     * The filter to search for the KhoHang to update in case it exists.
     */
    where: KhoHangWhereUniqueInput
    /**
     * In case the KhoHang found by the `where` argument doesn't exist, create a new KhoHang with this data.
     */
    create: XOR<KhoHangCreateInput, KhoHangUncheckedCreateInput>
    /**
     * In case the KhoHang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KhoHangUpdateInput, KhoHangUncheckedUpdateInput>
  }

  /**
   * KhoHang delete
   */
  export type KhoHangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhoHang
     */
    select?: KhoHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhoHang
     */
    omit?: KhoHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhoHangInclude<ExtArgs> | null
    /**
     * Filter which KhoHang to delete.
     */
    where: KhoHangWhereUniqueInput
  }

  /**
   * KhoHang deleteMany
   */
  export type KhoHangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KhoHangs to delete
     */
    where?: KhoHangWhereInput
    /**
     * Limit how many KhoHangs to delete.
     */
    limit?: number
  }

  /**
   * KhoHang.giaoDichKho
   */
  export type KhoHang$giaoDichKhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoInclude<ExtArgs> | null
    where?: GiaoDichKhoWhereInput
    orderBy?: GiaoDichKhoOrderByWithRelationInput | GiaoDichKhoOrderByWithRelationInput[]
    cursor?: GiaoDichKhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiaoDichKhoScalarFieldEnum | GiaoDichKhoScalarFieldEnum[]
  }

  /**
   * KhoHang.tonKho
   */
  export type KhoHang$tonKhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoInclude<ExtArgs> | null
    where?: TonKhoWhereInput
    orderBy?: TonKhoOrderByWithRelationInput | TonKhoOrderByWithRelationInput[]
    cursor?: TonKhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TonKhoScalarFieldEnum | TonKhoScalarFieldEnum[]
  }

  /**
   * KhoHang without action
   */
  export type KhoHangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhoHang
     */
    select?: KhoHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhoHang
     */
    omit?: KhoHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhoHangInclude<ExtArgs> | null
  }


  /**
   * Model Sach
   */

  export type AggregateSach = {
    _count: SachCountAggregateOutputType | null
    _avg: SachAvgAggregateOutputType | null
    _sum: SachSumAggregateOutputType | null
    _min: SachMinAggregateOutputType | null
    _max: SachMaxAggregateOutputType | null
  }

  export type SachAvgAggregateOutputType = {
    giaNhap: Decimal | null
    giaSach: Decimal | null
  }

  export type SachSumAggregateOutputType = {
    giaNhap: Decimal | null
    giaSach: Decimal | null
  }

  export type SachMinAggregateOutputType = {
    maSach: string | null
    tenSach: string | null
    tacGia: string | null
    nxb: string | null
    giaNhap: Decimal | null
    giaSach: Decimal | null
    trangThai: $Enums.TrangThaiSach | null
    anhBia: string | null
  }

  export type SachMaxAggregateOutputType = {
    maSach: string | null
    tenSach: string | null
    tacGia: string | null
    nxb: string | null
    giaNhap: Decimal | null
    giaSach: Decimal | null
    trangThai: $Enums.TrangThaiSach | null
    anhBia: string | null
  }

  export type SachCountAggregateOutputType = {
    maSach: number
    tenSach: number
    tacGia: number
    nxb: number
    giaNhap: number
    giaSach: number
    trangThai: number
    anhBia: number
    _all: number
  }


  export type SachAvgAggregateInputType = {
    giaNhap?: true
    giaSach?: true
  }

  export type SachSumAggregateInputType = {
    giaNhap?: true
    giaSach?: true
  }

  export type SachMinAggregateInputType = {
    maSach?: true
    tenSach?: true
    tacGia?: true
    nxb?: true
    giaNhap?: true
    giaSach?: true
    trangThai?: true
    anhBia?: true
  }

  export type SachMaxAggregateInputType = {
    maSach?: true
    tenSach?: true
    tacGia?: true
    nxb?: true
    giaNhap?: true
    giaSach?: true
    trangThai?: true
    anhBia?: true
  }

  export type SachCountAggregateInputType = {
    maSach?: true
    tenSach?: true
    tacGia?: true
    nxb?: true
    giaNhap?: true
    giaSach?: true
    trangThai?: true
    anhBia?: true
    _all?: true
  }

  export type SachAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sach to aggregate.
     */
    where?: SachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saches to fetch.
     */
    orderBy?: SachOrderByWithRelationInput | SachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Saches
    **/
    _count?: true | SachCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SachAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SachSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SachMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SachMaxAggregateInputType
  }

  export type GetSachAggregateType<T extends SachAggregateArgs> = {
        [P in keyof T & keyof AggregateSach]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSach[P]>
      : GetScalarType<T[P], AggregateSach[P]>
  }




  export type SachGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SachWhereInput
    orderBy?: SachOrderByWithAggregationInput | SachOrderByWithAggregationInput[]
    by: SachScalarFieldEnum[] | SachScalarFieldEnum
    having?: SachScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SachCountAggregateInputType | true
    _avg?: SachAvgAggregateInputType
    _sum?: SachSumAggregateInputType
    _min?: SachMinAggregateInputType
    _max?: SachMaxAggregateInputType
  }

  export type SachGroupByOutputType = {
    maSach: string
    tenSach: string
    tacGia: string
    nxb: string
    giaNhap: Decimal
    giaSach: Decimal
    trangThai: $Enums.TrangThaiSach
    anhBia: string | null
    _count: SachCountAggregateOutputType | null
    _avg: SachAvgAggregateOutputType | null
    _sum: SachSumAggregateOutputType | null
    _min: SachMinAggregateOutputType | null
    _max: SachMaxAggregateOutputType | null
  }

  type GetSachGroupByPayload<T extends SachGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SachGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SachGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SachGroupByOutputType[P]>
            : GetScalarType<T[P], SachGroupByOutputType[P]>
        }
      >
    >


  export type SachSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maSach?: boolean
    tenSach?: boolean
    tacGia?: boolean
    nxb?: boolean
    giaNhap?: boolean
    giaSach?: boolean
    trangThai?: boolean
    anhBia?: boolean
    giaoDichKho?: boolean | Sach$giaoDichKhoArgs<ExtArgs>
    tonKho?: boolean | Sach$tonKhoArgs<ExtArgs>
    chiTietDonHang?: boolean | Sach$chiTietDonHangArgs<ExtArgs>
    _count?: boolean | SachCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sach"]>

  export type SachSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maSach?: boolean
    tenSach?: boolean
    tacGia?: boolean
    nxb?: boolean
    giaNhap?: boolean
    giaSach?: boolean
    trangThai?: boolean
    anhBia?: boolean
  }, ExtArgs["result"]["sach"]>

  export type SachSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maSach?: boolean
    tenSach?: boolean
    tacGia?: boolean
    nxb?: boolean
    giaNhap?: boolean
    giaSach?: boolean
    trangThai?: boolean
    anhBia?: boolean
  }, ExtArgs["result"]["sach"]>

  export type SachSelectScalar = {
    maSach?: boolean
    tenSach?: boolean
    tacGia?: boolean
    nxb?: boolean
    giaNhap?: boolean
    giaSach?: boolean
    trangThai?: boolean
    anhBia?: boolean
  }

  export type SachOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"maSach" | "tenSach" | "tacGia" | "nxb" | "giaNhap" | "giaSach" | "trangThai" | "anhBia", ExtArgs["result"]["sach"]>
  export type SachInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    giaoDichKho?: boolean | Sach$giaoDichKhoArgs<ExtArgs>
    tonKho?: boolean | Sach$tonKhoArgs<ExtArgs>
    chiTietDonHang?: boolean | Sach$chiTietDonHangArgs<ExtArgs>
    _count?: boolean | SachCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SachIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SachIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SachPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sach"
    objects: {
      giaoDichKho: Prisma.$GiaoDichKhoPayload<ExtArgs>[]
      tonKho: Prisma.$TonKhoPayload<ExtArgs>[]
      chiTietDonHang: Prisma.$ChiTietDonHangPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      maSach: string
      tenSach: string
      tacGia: string
      nxb: string
      giaNhap: Prisma.Decimal
      giaSach: Prisma.Decimal
      trangThai: $Enums.TrangThaiSach
      anhBia: string | null
    }, ExtArgs["result"]["sach"]>
    composites: {}
  }

  type SachGetPayload<S extends boolean | null | undefined | SachDefaultArgs> = $Result.GetResult<Prisma.$SachPayload, S>

  type SachCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SachFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SachCountAggregateInputType | true
    }

  export interface SachDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sach'], meta: { name: 'Sach' } }
    /**
     * Find zero or one Sach that matches the filter.
     * @param {SachFindUniqueArgs} args - Arguments to find a Sach
     * @example
     * // Get one Sach
     * const sach = await prisma.sach.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SachFindUniqueArgs>(args: SelectSubset<T, SachFindUniqueArgs<ExtArgs>>): Prisma__SachClient<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sach that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SachFindUniqueOrThrowArgs} args - Arguments to find a Sach
     * @example
     * // Get one Sach
     * const sach = await prisma.sach.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SachFindUniqueOrThrowArgs>(args: SelectSubset<T, SachFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SachClient<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sach that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SachFindFirstArgs} args - Arguments to find a Sach
     * @example
     * // Get one Sach
     * const sach = await prisma.sach.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SachFindFirstArgs>(args?: SelectSubset<T, SachFindFirstArgs<ExtArgs>>): Prisma__SachClient<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sach that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SachFindFirstOrThrowArgs} args - Arguments to find a Sach
     * @example
     * // Get one Sach
     * const sach = await prisma.sach.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SachFindFirstOrThrowArgs>(args?: SelectSubset<T, SachFindFirstOrThrowArgs<ExtArgs>>): Prisma__SachClient<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SachFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saches
     * const saches = await prisma.sach.findMany()
     * 
     * // Get first 10 Saches
     * const saches = await prisma.sach.findMany({ take: 10 })
     * 
     * // Only select the `maSach`
     * const sachWithMaSachOnly = await prisma.sach.findMany({ select: { maSach: true } })
     * 
     */
    findMany<T extends SachFindManyArgs>(args?: SelectSubset<T, SachFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sach.
     * @param {SachCreateArgs} args - Arguments to create a Sach.
     * @example
     * // Create one Sach
     * const Sach = await prisma.sach.create({
     *   data: {
     *     // ... data to create a Sach
     *   }
     * })
     * 
     */
    create<T extends SachCreateArgs>(args: SelectSubset<T, SachCreateArgs<ExtArgs>>): Prisma__SachClient<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saches.
     * @param {SachCreateManyArgs} args - Arguments to create many Saches.
     * @example
     * // Create many Saches
     * const sach = await prisma.sach.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SachCreateManyArgs>(args?: SelectSubset<T, SachCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Saches and returns the data saved in the database.
     * @param {SachCreateManyAndReturnArgs} args - Arguments to create many Saches.
     * @example
     * // Create many Saches
     * const sach = await prisma.sach.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Saches and only return the `maSach`
     * const sachWithMaSachOnly = await prisma.sach.createManyAndReturn({
     *   select: { maSach: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SachCreateManyAndReturnArgs>(args?: SelectSubset<T, SachCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sach.
     * @param {SachDeleteArgs} args - Arguments to delete one Sach.
     * @example
     * // Delete one Sach
     * const Sach = await prisma.sach.delete({
     *   where: {
     *     // ... filter to delete one Sach
     *   }
     * })
     * 
     */
    delete<T extends SachDeleteArgs>(args: SelectSubset<T, SachDeleteArgs<ExtArgs>>): Prisma__SachClient<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sach.
     * @param {SachUpdateArgs} args - Arguments to update one Sach.
     * @example
     * // Update one Sach
     * const sach = await prisma.sach.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SachUpdateArgs>(args: SelectSubset<T, SachUpdateArgs<ExtArgs>>): Prisma__SachClient<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saches.
     * @param {SachDeleteManyArgs} args - Arguments to filter Saches to delete.
     * @example
     * // Delete a few Saches
     * const { count } = await prisma.sach.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SachDeleteManyArgs>(args?: SelectSubset<T, SachDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SachUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saches
     * const sach = await prisma.sach.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SachUpdateManyArgs>(args: SelectSubset<T, SachUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saches and returns the data updated in the database.
     * @param {SachUpdateManyAndReturnArgs} args - Arguments to update many Saches.
     * @example
     * // Update many Saches
     * const sach = await prisma.sach.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Saches and only return the `maSach`
     * const sachWithMaSachOnly = await prisma.sach.updateManyAndReturn({
     *   select: { maSach: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SachUpdateManyAndReturnArgs>(args: SelectSubset<T, SachUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sach.
     * @param {SachUpsertArgs} args - Arguments to update or create a Sach.
     * @example
     * // Update or create a Sach
     * const sach = await prisma.sach.upsert({
     *   create: {
     *     // ... data to create a Sach
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sach we want to update
     *   }
     * })
     */
    upsert<T extends SachUpsertArgs>(args: SelectSubset<T, SachUpsertArgs<ExtArgs>>): Prisma__SachClient<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SachCountArgs} args - Arguments to filter Saches to count.
     * @example
     * // Count the number of Saches
     * const count = await prisma.sach.count({
     *   where: {
     *     // ... the filter for the Saches we want to count
     *   }
     * })
    **/
    count<T extends SachCountArgs>(
      args?: Subset<T, SachCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SachCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SachAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SachAggregateArgs>(args: Subset<T, SachAggregateArgs>): Prisma.PrismaPromise<GetSachAggregateType<T>>

    /**
     * Group by Sach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SachGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SachGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SachGroupByArgs['orderBy'] }
        : { orderBy?: SachGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SachGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSachGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sach model
   */
  readonly fields: SachFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sach.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SachClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    giaoDichKho<T extends Sach$giaoDichKhoArgs<ExtArgs> = {}>(args?: Subset<T, Sach$giaoDichKhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tonKho<T extends Sach$tonKhoArgs<ExtArgs> = {}>(args?: Subset<T, Sach$tonKhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TonKhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chiTietDonHang<T extends Sach$chiTietDonHangArgs<ExtArgs> = {}>(args?: Subset<T, Sach$chiTietDonHangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiTietDonHangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sach model
   */
  interface SachFieldRefs {
    readonly maSach: FieldRef<"Sach", 'String'>
    readonly tenSach: FieldRef<"Sach", 'String'>
    readonly tacGia: FieldRef<"Sach", 'String'>
    readonly nxb: FieldRef<"Sach", 'String'>
    readonly giaNhap: FieldRef<"Sach", 'Decimal'>
    readonly giaSach: FieldRef<"Sach", 'Decimal'>
    readonly trangThai: FieldRef<"Sach", 'TrangThaiSach'>
    readonly anhBia: FieldRef<"Sach", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sach findUnique
   */
  export type SachFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sach
     */
    select?: SachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sach
     */
    omit?: SachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SachInclude<ExtArgs> | null
    /**
     * Filter, which Sach to fetch.
     */
    where: SachWhereUniqueInput
  }

  /**
   * Sach findUniqueOrThrow
   */
  export type SachFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sach
     */
    select?: SachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sach
     */
    omit?: SachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SachInclude<ExtArgs> | null
    /**
     * Filter, which Sach to fetch.
     */
    where: SachWhereUniqueInput
  }

  /**
   * Sach findFirst
   */
  export type SachFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sach
     */
    select?: SachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sach
     */
    omit?: SachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SachInclude<ExtArgs> | null
    /**
     * Filter, which Sach to fetch.
     */
    where?: SachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saches to fetch.
     */
    orderBy?: SachOrderByWithRelationInput | SachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Saches.
     */
    cursor?: SachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saches.
     */
    distinct?: SachScalarFieldEnum | SachScalarFieldEnum[]
  }

  /**
   * Sach findFirstOrThrow
   */
  export type SachFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sach
     */
    select?: SachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sach
     */
    omit?: SachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SachInclude<ExtArgs> | null
    /**
     * Filter, which Sach to fetch.
     */
    where?: SachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saches to fetch.
     */
    orderBy?: SachOrderByWithRelationInput | SachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Saches.
     */
    cursor?: SachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saches.
     */
    distinct?: SachScalarFieldEnum | SachScalarFieldEnum[]
  }

  /**
   * Sach findMany
   */
  export type SachFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sach
     */
    select?: SachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sach
     */
    omit?: SachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SachInclude<ExtArgs> | null
    /**
     * Filter, which Saches to fetch.
     */
    where?: SachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saches to fetch.
     */
    orderBy?: SachOrderByWithRelationInput | SachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Saches.
     */
    cursor?: SachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saches.
     */
    distinct?: SachScalarFieldEnum | SachScalarFieldEnum[]
  }

  /**
   * Sach create
   */
  export type SachCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sach
     */
    select?: SachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sach
     */
    omit?: SachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SachInclude<ExtArgs> | null
    /**
     * The data needed to create a Sach.
     */
    data: XOR<SachCreateInput, SachUncheckedCreateInput>
  }

  /**
   * Sach createMany
   */
  export type SachCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Saches.
     */
    data: SachCreateManyInput | SachCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sach createManyAndReturn
   */
  export type SachCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sach
     */
    select?: SachSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sach
     */
    omit?: SachOmit<ExtArgs> | null
    /**
     * The data used to create many Saches.
     */
    data: SachCreateManyInput | SachCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sach update
   */
  export type SachUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sach
     */
    select?: SachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sach
     */
    omit?: SachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SachInclude<ExtArgs> | null
    /**
     * The data needed to update a Sach.
     */
    data: XOR<SachUpdateInput, SachUncheckedUpdateInput>
    /**
     * Choose, which Sach to update.
     */
    where: SachWhereUniqueInput
  }

  /**
   * Sach updateMany
   */
  export type SachUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Saches.
     */
    data: XOR<SachUpdateManyMutationInput, SachUncheckedUpdateManyInput>
    /**
     * Filter which Saches to update
     */
    where?: SachWhereInput
    /**
     * Limit how many Saches to update.
     */
    limit?: number
  }

  /**
   * Sach updateManyAndReturn
   */
  export type SachUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sach
     */
    select?: SachSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sach
     */
    omit?: SachOmit<ExtArgs> | null
    /**
     * The data used to update Saches.
     */
    data: XOR<SachUpdateManyMutationInput, SachUncheckedUpdateManyInput>
    /**
     * Filter which Saches to update
     */
    where?: SachWhereInput
    /**
     * Limit how many Saches to update.
     */
    limit?: number
  }

  /**
   * Sach upsert
   */
  export type SachUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sach
     */
    select?: SachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sach
     */
    omit?: SachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SachInclude<ExtArgs> | null
    /**
     * The filter to search for the Sach to update in case it exists.
     */
    where: SachWhereUniqueInput
    /**
     * In case the Sach found by the `where` argument doesn't exist, create a new Sach with this data.
     */
    create: XOR<SachCreateInput, SachUncheckedCreateInput>
    /**
     * In case the Sach was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SachUpdateInput, SachUncheckedUpdateInput>
  }

  /**
   * Sach delete
   */
  export type SachDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sach
     */
    select?: SachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sach
     */
    omit?: SachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SachInclude<ExtArgs> | null
    /**
     * Filter which Sach to delete.
     */
    where: SachWhereUniqueInput
  }

  /**
   * Sach deleteMany
   */
  export type SachDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Saches to delete
     */
    where?: SachWhereInput
    /**
     * Limit how many Saches to delete.
     */
    limit?: number
  }

  /**
   * Sach.giaoDichKho
   */
  export type Sach$giaoDichKhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoInclude<ExtArgs> | null
    where?: GiaoDichKhoWhereInput
    orderBy?: GiaoDichKhoOrderByWithRelationInput | GiaoDichKhoOrderByWithRelationInput[]
    cursor?: GiaoDichKhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiaoDichKhoScalarFieldEnum | GiaoDichKhoScalarFieldEnum[]
  }

  /**
   * Sach.tonKho
   */
  export type Sach$tonKhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoInclude<ExtArgs> | null
    where?: TonKhoWhereInput
    orderBy?: TonKhoOrderByWithRelationInput | TonKhoOrderByWithRelationInput[]
    cursor?: TonKhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TonKhoScalarFieldEnum | TonKhoScalarFieldEnum[]
  }

  /**
   * Sach.chiTietDonHang
   */
  export type Sach$chiTietDonHangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangInclude<ExtArgs> | null
    where?: ChiTietDonHangWhereInput
    orderBy?: ChiTietDonHangOrderByWithRelationInput | ChiTietDonHangOrderByWithRelationInput[]
    cursor?: ChiTietDonHangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChiTietDonHangScalarFieldEnum | ChiTietDonHangScalarFieldEnum[]
  }

  /**
   * Sach without action
   */
  export type SachDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sach
     */
    select?: SachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sach
     */
    omit?: SachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SachInclude<ExtArgs> | null
  }


  /**
   * Model GiaoDichKho
   */

  export type AggregateGiaoDichKho = {
    _count: GiaoDichKhoCountAggregateOutputType | null
    _avg: GiaoDichKhoAvgAggregateOutputType | null
    _sum: GiaoDichKhoSumAggregateOutputType | null
    _min: GiaoDichKhoMinAggregateOutputType | null
    _max: GiaoDichKhoMaxAggregateOutputType | null
  }

  export type GiaoDichKhoAvgAggregateOutputType = {
    soLuong: number | null
  }

  export type GiaoDichKhoSumAggregateOutputType = {
    soLuong: number | null
  }

  export type GiaoDichKhoMinAggregateOutputType = {
    maGD: string | null
    maKho: string | null
    maSach: string | null
    maNV: string | null
    loaiGD: $Enums.LoaiGiaoDich | null
    thoiGian: Date | null
    soLuong: number | null
    ghiChu: string | null
  }

  export type GiaoDichKhoMaxAggregateOutputType = {
    maGD: string | null
    maKho: string | null
    maSach: string | null
    maNV: string | null
    loaiGD: $Enums.LoaiGiaoDich | null
    thoiGian: Date | null
    soLuong: number | null
    ghiChu: string | null
  }

  export type GiaoDichKhoCountAggregateOutputType = {
    maGD: number
    maKho: number
    maSach: number
    maNV: number
    loaiGD: number
    thoiGian: number
    soLuong: number
    ghiChu: number
    _all: number
  }


  export type GiaoDichKhoAvgAggregateInputType = {
    soLuong?: true
  }

  export type GiaoDichKhoSumAggregateInputType = {
    soLuong?: true
  }

  export type GiaoDichKhoMinAggregateInputType = {
    maGD?: true
    maKho?: true
    maSach?: true
    maNV?: true
    loaiGD?: true
    thoiGian?: true
    soLuong?: true
    ghiChu?: true
  }

  export type GiaoDichKhoMaxAggregateInputType = {
    maGD?: true
    maKho?: true
    maSach?: true
    maNV?: true
    loaiGD?: true
    thoiGian?: true
    soLuong?: true
    ghiChu?: true
  }

  export type GiaoDichKhoCountAggregateInputType = {
    maGD?: true
    maKho?: true
    maSach?: true
    maNV?: true
    loaiGD?: true
    thoiGian?: true
    soLuong?: true
    ghiChu?: true
    _all?: true
  }

  export type GiaoDichKhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiaoDichKho to aggregate.
     */
    where?: GiaoDichKhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiaoDichKhos to fetch.
     */
    orderBy?: GiaoDichKhoOrderByWithRelationInput | GiaoDichKhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GiaoDichKhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiaoDichKhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiaoDichKhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GiaoDichKhos
    **/
    _count?: true | GiaoDichKhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GiaoDichKhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GiaoDichKhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiaoDichKhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiaoDichKhoMaxAggregateInputType
  }

  export type GetGiaoDichKhoAggregateType<T extends GiaoDichKhoAggregateArgs> = {
        [P in keyof T & keyof AggregateGiaoDichKho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGiaoDichKho[P]>
      : GetScalarType<T[P], AggregateGiaoDichKho[P]>
  }




  export type GiaoDichKhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiaoDichKhoWhereInput
    orderBy?: GiaoDichKhoOrderByWithAggregationInput | GiaoDichKhoOrderByWithAggregationInput[]
    by: GiaoDichKhoScalarFieldEnum[] | GiaoDichKhoScalarFieldEnum
    having?: GiaoDichKhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiaoDichKhoCountAggregateInputType | true
    _avg?: GiaoDichKhoAvgAggregateInputType
    _sum?: GiaoDichKhoSumAggregateInputType
    _min?: GiaoDichKhoMinAggregateInputType
    _max?: GiaoDichKhoMaxAggregateInputType
  }

  export type GiaoDichKhoGroupByOutputType = {
    maGD: string
    maKho: string
    maSach: string
    maNV: string
    loaiGD: $Enums.LoaiGiaoDich
    thoiGian: Date
    soLuong: number
    ghiChu: string | null
    _count: GiaoDichKhoCountAggregateOutputType | null
    _avg: GiaoDichKhoAvgAggregateOutputType | null
    _sum: GiaoDichKhoSumAggregateOutputType | null
    _min: GiaoDichKhoMinAggregateOutputType | null
    _max: GiaoDichKhoMaxAggregateOutputType | null
  }

  type GetGiaoDichKhoGroupByPayload<T extends GiaoDichKhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiaoDichKhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiaoDichKhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiaoDichKhoGroupByOutputType[P]>
            : GetScalarType<T[P], GiaoDichKhoGroupByOutputType[P]>
        }
      >
    >


  export type GiaoDichKhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maGD?: boolean
    maKho?: boolean
    maSach?: boolean
    maNV?: boolean
    loaiGD?: boolean
    thoiGian?: boolean
    soLuong?: boolean
    ghiChu?: boolean
    khoHang?: boolean | KhoHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
    nhanVien?: boolean | NhanVienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["giaoDichKho"]>

  export type GiaoDichKhoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maGD?: boolean
    maKho?: boolean
    maSach?: boolean
    maNV?: boolean
    loaiGD?: boolean
    thoiGian?: boolean
    soLuong?: boolean
    ghiChu?: boolean
    khoHang?: boolean | KhoHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
    nhanVien?: boolean | NhanVienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["giaoDichKho"]>

  export type GiaoDichKhoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maGD?: boolean
    maKho?: boolean
    maSach?: boolean
    maNV?: boolean
    loaiGD?: boolean
    thoiGian?: boolean
    soLuong?: boolean
    ghiChu?: boolean
    khoHang?: boolean | KhoHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
    nhanVien?: boolean | NhanVienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["giaoDichKho"]>

  export type GiaoDichKhoSelectScalar = {
    maGD?: boolean
    maKho?: boolean
    maSach?: boolean
    maNV?: boolean
    loaiGD?: boolean
    thoiGian?: boolean
    soLuong?: boolean
    ghiChu?: boolean
  }

  export type GiaoDichKhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"maGD" | "maKho" | "maSach" | "maNV" | "loaiGD" | "thoiGian" | "soLuong" | "ghiChu", ExtArgs["result"]["giaoDichKho"]>
  export type GiaoDichKhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    khoHang?: boolean | KhoHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
    nhanVien?: boolean | NhanVienDefaultArgs<ExtArgs>
  }
  export type GiaoDichKhoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    khoHang?: boolean | KhoHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
    nhanVien?: boolean | NhanVienDefaultArgs<ExtArgs>
  }
  export type GiaoDichKhoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    khoHang?: boolean | KhoHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
    nhanVien?: boolean | NhanVienDefaultArgs<ExtArgs>
  }

  export type $GiaoDichKhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GiaoDichKho"
    objects: {
      khoHang: Prisma.$KhoHangPayload<ExtArgs>
      sach: Prisma.$SachPayload<ExtArgs>
      nhanVien: Prisma.$NhanVienPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      maGD: string
      maKho: string
      maSach: string
      maNV: string
      loaiGD: $Enums.LoaiGiaoDich
      thoiGian: Date
      soLuong: number
      ghiChu: string | null
    }, ExtArgs["result"]["giaoDichKho"]>
    composites: {}
  }

  type GiaoDichKhoGetPayload<S extends boolean | null | undefined | GiaoDichKhoDefaultArgs> = $Result.GetResult<Prisma.$GiaoDichKhoPayload, S>

  type GiaoDichKhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GiaoDichKhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GiaoDichKhoCountAggregateInputType | true
    }

  export interface GiaoDichKhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GiaoDichKho'], meta: { name: 'GiaoDichKho' } }
    /**
     * Find zero or one GiaoDichKho that matches the filter.
     * @param {GiaoDichKhoFindUniqueArgs} args - Arguments to find a GiaoDichKho
     * @example
     * // Get one GiaoDichKho
     * const giaoDichKho = await prisma.giaoDichKho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GiaoDichKhoFindUniqueArgs>(args: SelectSubset<T, GiaoDichKhoFindUniqueArgs<ExtArgs>>): Prisma__GiaoDichKhoClient<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GiaoDichKho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GiaoDichKhoFindUniqueOrThrowArgs} args - Arguments to find a GiaoDichKho
     * @example
     * // Get one GiaoDichKho
     * const giaoDichKho = await prisma.giaoDichKho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GiaoDichKhoFindUniqueOrThrowArgs>(args: SelectSubset<T, GiaoDichKhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GiaoDichKhoClient<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GiaoDichKho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichKhoFindFirstArgs} args - Arguments to find a GiaoDichKho
     * @example
     * // Get one GiaoDichKho
     * const giaoDichKho = await prisma.giaoDichKho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GiaoDichKhoFindFirstArgs>(args?: SelectSubset<T, GiaoDichKhoFindFirstArgs<ExtArgs>>): Prisma__GiaoDichKhoClient<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GiaoDichKho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichKhoFindFirstOrThrowArgs} args - Arguments to find a GiaoDichKho
     * @example
     * // Get one GiaoDichKho
     * const giaoDichKho = await prisma.giaoDichKho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GiaoDichKhoFindFirstOrThrowArgs>(args?: SelectSubset<T, GiaoDichKhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GiaoDichKhoClient<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GiaoDichKhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichKhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GiaoDichKhos
     * const giaoDichKhos = await prisma.giaoDichKho.findMany()
     * 
     * // Get first 10 GiaoDichKhos
     * const giaoDichKhos = await prisma.giaoDichKho.findMany({ take: 10 })
     * 
     * // Only select the `maGD`
     * const giaoDichKhoWithMaGDOnly = await prisma.giaoDichKho.findMany({ select: { maGD: true } })
     * 
     */
    findMany<T extends GiaoDichKhoFindManyArgs>(args?: SelectSubset<T, GiaoDichKhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GiaoDichKho.
     * @param {GiaoDichKhoCreateArgs} args - Arguments to create a GiaoDichKho.
     * @example
     * // Create one GiaoDichKho
     * const GiaoDichKho = await prisma.giaoDichKho.create({
     *   data: {
     *     // ... data to create a GiaoDichKho
     *   }
     * })
     * 
     */
    create<T extends GiaoDichKhoCreateArgs>(args: SelectSubset<T, GiaoDichKhoCreateArgs<ExtArgs>>): Prisma__GiaoDichKhoClient<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GiaoDichKhos.
     * @param {GiaoDichKhoCreateManyArgs} args - Arguments to create many GiaoDichKhos.
     * @example
     * // Create many GiaoDichKhos
     * const giaoDichKho = await prisma.giaoDichKho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GiaoDichKhoCreateManyArgs>(args?: SelectSubset<T, GiaoDichKhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GiaoDichKhos and returns the data saved in the database.
     * @param {GiaoDichKhoCreateManyAndReturnArgs} args - Arguments to create many GiaoDichKhos.
     * @example
     * // Create many GiaoDichKhos
     * const giaoDichKho = await prisma.giaoDichKho.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GiaoDichKhos and only return the `maGD`
     * const giaoDichKhoWithMaGDOnly = await prisma.giaoDichKho.createManyAndReturn({
     *   select: { maGD: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GiaoDichKhoCreateManyAndReturnArgs>(args?: SelectSubset<T, GiaoDichKhoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GiaoDichKho.
     * @param {GiaoDichKhoDeleteArgs} args - Arguments to delete one GiaoDichKho.
     * @example
     * // Delete one GiaoDichKho
     * const GiaoDichKho = await prisma.giaoDichKho.delete({
     *   where: {
     *     // ... filter to delete one GiaoDichKho
     *   }
     * })
     * 
     */
    delete<T extends GiaoDichKhoDeleteArgs>(args: SelectSubset<T, GiaoDichKhoDeleteArgs<ExtArgs>>): Prisma__GiaoDichKhoClient<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GiaoDichKho.
     * @param {GiaoDichKhoUpdateArgs} args - Arguments to update one GiaoDichKho.
     * @example
     * // Update one GiaoDichKho
     * const giaoDichKho = await prisma.giaoDichKho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GiaoDichKhoUpdateArgs>(args: SelectSubset<T, GiaoDichKhoUpdateArgs<ExtArgs>>): Prisma__GiaoDichKhoClient<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GiaoDichKhos.
     * @param {GiaoDichKhoDeleteManyArgs} args - Arguments to filter GiaoDichKhos to delete.
     * @example
     * // Delete a few GiaoDichKhos
     * const { count } = await prisma.giaoDichKho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GiaoDichKhoDeleteManyArgs>(args?: SelectSubset<T, GiaoDichKhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GiaoDichKhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichKhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GiaoDichKhos
     * const giaoDichKho = await prisma.giaoDichKho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GiaoDichKhoUpdateManyArgs>(args: SelectSubset<T, GiaoDichKhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GiaoDichKhos and returns the data updated in the database.
     * @param {GiaoDichKhoUpdateManyAndReturnArgs} args - Arguments to update many GiaoDichKhos.
     * @example
     * // Update many GiaoDichKhos
     * const giaoDichKho = await prisma.giaoDichKho.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GiaoDichKhos and only return the `maGD`
     * const giaoDichKhoWithMaGDOnly = await prisma.giaoDichKho.updateManyAndReturn({
     *   select: { maGD: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GiaoDichKhoUpdateManyAndReturnArgs>(args: SelectSubset<T, GiaoDichKhoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GiaoDichKho.
     * @param {GiaoDichKhoUpsertArgs} args - Arguments to update or create a GiaoDichKho.
     * @example
     * // Update or create a GiaoDichKho
     * const giaoDichKho = await prisma.giaoDichKho.upsert({
     *   create: {
     *     // ... data to create a GiaoDichKho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GiaoDichKho we want to update
     *   }
     * })
     */
    upsert<T extends GiaoDichKhoUpsertArgs>(args: SelectSubset<T, GiaoDichKhoUpsertArgs<ExtArgs>>): Prisma__GiaoDichKhoClient<$Result.GetResult<Prisma.$GiaoDichKhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GiaoDichKhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichKhoCountArgs} args - Arguments to filter GiaoDichKhos to count.
     * @example
     * // Count the number of GiaoDichKhos
     * const count = await prisma.giaoDichKho.count({
     *   where: {
     *     // ... the filter for the GiaoDichKhos we want to count
     *   }
     * })
    **/
    count<T extends GiaoDichKhoCountArgs>(
      args?: Subset<T, GiaoDichKhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiaoDichKhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GiaoDichKho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichKhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GiaoDichKhoAggregateArgs>(args: Subset<T, GiaoDichKhoAggregateArgs>): Prisma.PrismaPromise<GetGiaoDichKhoAggregateType<T>>

    /**
     * Group by GiaoDichKho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichKhoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GiaoDichKhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GiaoDichKhoGroupByArgs['orderBy'] }
        : { orderBy?: GiaoDichKhoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GiaoDichKhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiaoDichKhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GiaoDichKho model
   */
  readonly fields: GiaoDichKhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GiaoDichKho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GiaoDichKhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    khoHang<T extends KhoHangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KhoHangDefaultArgs<ExtArgs>>): Prisma__KhoHangClient<$Result.GetResult<Prisma.$KhoHangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sach<T extends SachDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SachDefaultArgs<ExtArgs>>): Prisma__SachClient<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nhanVien<T extends NhanVienDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NhanVienDefaultArgs<ExtArgs>>): Prisma__NhanVienClient<$Result.GetResult<Prisma.$NhanVienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GiaoDichKho model
   */
  interface GiaoDichKhoFieldRefs {
    readonly maGD: FieldRef<"GiaoDichKho", 'String'>
    readonly maKho: FieldRef<"GiaoDichKho", 'String'>
    readonly maSach: FieldRef<"GiaoDichKho", 'String'>
    readonly maNV: FieldRef<"GiaoDichKho", 'String'>
    readonly loaiGD: FieldRef<"GiaoDichKho", 'LoaiGiaoDich'>
    readonly thoiGian: FieldRef<"GiaoDichKho", 'DateTime'>
    readonly soLuong: FieldRef<"GiaoDichKho", 'Int'>
    readonly ghiChu: FieldRef<"GiaoDichKho", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GiaoDichKho findUnique
   */
  export type GiaoDichKhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoInclude<ExtArgs> | null
    /**
     * Filter, which GiaoDichKho to fetch.
     */
    where: GiaoDichKhoWhereUniqueInput
  }

  /**
   * GiaoDichKho findUniqueOrThrow
   */
  export type GiaoDichKhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoInclude<ExtArgs> | null
    /**
     * Filter, which GiaoDichKho to fetch.
     */
    where: GiaoDichKhoWhereUniqueInput
  }

  /**
   * GiaoDichKho findFirst
   */
  export type GiaoDichKhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoInclude<ExtArgs> | null
    /**
     * Filter, which GiaoDichKho to fetch.
     */
    where?: GiaoDichKhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiaoDichKhos to fetch.
     */
    orderBy?: GiaoDichKhoOrderByWithRelationInput | GiaoDichKhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiaoDichKhos.
     */
    cursor?: GiaoDichKhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiaoDichKhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiaoDichKhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiaoDichKhos.
     */
    distinct?: GiaoDichKhoScalarFieldEnum | GiaoDichKhoScalarFieldEnum[]
  }

  /**
   * GiaoDichKho findFirstOrThrow
   */
  export type GiaoDichKhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoInclude<ExtArgs> | null
    /**
     * Filter, which GiaoDichKho to fetch.
     */
    where?: GiaoDichKhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiaoDichKhos to fetch.
     */
    orderBy?: GiaoDichKhoOrderByWithRelationInput | GiaoDichKhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiaoDichKhos.
     */
    cursor?: GiaoDichKhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiaoDichKhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiaoDichKhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiaoDichKhos.
     */
    distinct?: GiaoDichKhoScalarFieldEnum | GiaoDichKhoScalarFieldEnum[]
  }

  /**
   * GiaoDichKho findMany
   */
  export type GiaoDichKhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoInclude<ExtArgs> | null
    /**
     * Filter, which GiaoDichKhos to fetch.
     */
    where?: GiaoDichKhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiaoDichKhos to fetch.
     */
    orderBy?: GiaoDichKhoOrderByWithRelationInput | GiaoDichKhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GiaoDichKhos.
     */
    cursor?: GiaoDichKhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiaoDichKhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiaoDichKhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiaoDichKhos.
     */
    distinct?: GiaoDichKhoScalarFieldEnum | GiaoDichKhoScalarFieldEnum[]
  }

  /**
   * GiaoDichKho create
   */
  export type GiaoDichKhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoInclude<ExtArgs> | null
    /**
     * The data needed to create a GiaoDichKho.
     */
    data: XOR<GiaoDichKhoCreateInput, GiaoDichKhoUncheckedCreateInput>
  }

  /**
   * GiaoDichKho createMany
   */
  export type GiaoDichKhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GiaoDichKhos.
     */
    data: GiaoDichKhoCreateManyInput | GiaoDichKhoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GiaoDichKho createManyAndReturn
   */
  export type GiaoDichKhoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * The data used to create many GiaoDichKhos.
     */
    data: GiaoDichKhoCreateManyInput | GiaoDichKhoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GiaoDichKho update
   */
  export type GiaoDichKhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoInclude<ExtArgs> | null
    /**
     * The data needed to update a GiaoDichKho.
     */
    data: XOR<GiaoDichKhoUpdateInput, GiaoDichKhoUncheckedUpdateInput>
    /**
     * Choose, which GiaoDichKho to update.
     */
    where: GiaoDichKhoWhereUniqueInput
  }

  /**
   * GiaoDichKho updateMany
   */
  export type GiaoDichKhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GiaoDichKhos.
     */
    data: XOR<GiaoDichKhoUpdateManyMutationInput, GiaoDichKhoUncheckedUpdateManyInput>
    /**
     * Filter which GiaoDichKhos to update
     */
    where?: GiaoDichKhoWhereInput
    /**
     * Limit how many GiaoDichKhos to update.
     */
    limit?: number
  }

  /**
   * GiaoDichKho updateManyAndReturn
   */
  export type GiaoDichKhoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * The data used to update GiaoDichKhos.
     */
    data: XOR<GiaoDichKhoUpdateManyMutationInput, GiaoDichKhoUncheckedUpdateManyInput>
    /**
     * Filter which GiaoDichKhos to update
     */
    where?: GiaoDichKhoWhereInput
    /**
     * Limit how many GiaoDichKhos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GiaoDichKho upsert
   */
  export type GiaoDichKhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoInclude<ExtArgs> | null
    /**
     * The filter to search for the GiaoDichKho to update in case it exists.
     */
    where: GiaoDichKhoWhereUniqueInput
    /**
     * In case the GiaoDichKho found by the `where` argument doesn't exist, create a new GiaoDichKho with this data.
     */
    create: XOR<GiaoDichKhoCreateInput, GiaoDichKhoUncheckedCreateInput>
    /**
     * In case the GiaoDichKho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GiaoDichKhoUpdateInput, GiaoDichKhoUncheckedUpdateInput>
  }

  /**
   * GiaoDichKho delete
   */
  export type GiaoDichKhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoInclude<ExtArgs> | null
    /**
     * Filter which GiaoDichKho to delete.
     */
    where: GiaoDichKhoWhereUniqueInput
  }

  /**
   * GiaoDichKho deleteMany
   */
  export type GiaoDichKhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiaoDichKhos to delete
     */
    where?: GiaoDichKhoWhereInput
    /**
     * Limit how many GiaoDichKhos to delete.
     */
    limit?: number
  }

  /**
   * GiaoDichKho without action
   */
  export type GiaoDichKhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichKho
     */
    select?: GiaoDichKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichKho
     */
    omit?: GiaoDichKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaoDichKhoInclude<ExtArgs> | null
  }


  /**
   * Model TonKho
   */

  export type AggregateTonKho = {
    _count: TonKhoCountAggregateOutputType | null
    _avg: TonKhoAvgAggregateOutputType | null
    _sum: TonKhoSumAggregateOutputType | null
    _min: TonKhoMinAggregateOutputType | null
    _max: TonKhoMaxAggregateOutputType | null
  }

  export type TonKhoAvgAggregateOutputType = {
    soLuong: number | null
    nguongMin: number | null
    nguongMax: number | null
  }

  export type TonKhoSumAggregateOutputType = {
    soLuong: number | null
    nguongMin: number | null
    nguongMax: number | null
  }

  export type TonKhoMinAggregateOutputType = {
    maKho: string | null
    maSach: string | null
    soLuong: number | null
    viTriKe: string | null
    nguongMin: number | null
    nguongMax: number | null
  }

  export type TonKhoMaxAggregateOutputType = {
    maKho: string | null
    maSach: string | null
    soLuong: number | null
    viTriKe: string | null
    nguongMin: number | null
    nguongMax: number | null
  }

  export type TonKhoCountAggregateOutputType = {
    maKho: number
    maSach: number
    soLuong: number
    viTriKe: number
    nguongMin: number
    nguongMax: number
    _all: number
  }


  export type TonKhoAvgAggregateInputType = {
    soLuong?: true
    nguongMin?: true
    nguongMax?: true
  }

  export type TonKhoSumAggregateInputType = {
    soLuong?: true
    nguongMin?: true
    nguongMax?: true
  }

  export type TonKhoMinAggregateInputType = {
    maKho?: true
    maSach?: true
    soLuong?: true
    viTriKe?: true
    nguongMin?: true
    nguongMax?: true
  }

  export type TonKhoMaxAggregateInputType = {
    maKho?: true
    maSach?: true
    soLuong?: true
    viTriKe?: true
    nguongMin?: true
    nguongMax?: true
  }

  export type TonKhoCountAggregateInputType = {
    maKho?: true
    maSach?: true
    soLuong?: true
    viTriKe?: true
    nguongMin?: true
    nguongMax?: true
    _all?: true
  }

  export type TonKhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TonKho to aggregate.
     */
    where?: TonKhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TonKhos to fetch.
     */
    orderBy?: TonKhoOrderByWithRelationInput | TonKhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TonKhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TonKhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TonKhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TonKhos
    **/
    _count?: true | TonKhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TonKhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TonKhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TonKhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TonKhoMaxAggregateInputType
  }

  export type GetTonKhoAggregateType<T extends TonKhoAggregateArgs> = {
        [P in keyof T & keyof AggregateTonKho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTonKho[P]>
      : GetScalarType<T[P], AggregateTonKho[P]>
  }




  export type TonKhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TonKhoWhereInput
    orderBy?: TonKhoOrderByWithAggregationInput | TonKhoOrderByWithAggregationInput[]
    by: TonKhoScalarFieldEnum[] | TonKhoScalarFieldEnum
    having?: TonKhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TonKhoCountAggregateInputType | true
    _avg?: TonKhoAvgAggregateInputType
    _sum?: TonKhoSumAggregateInputType
    _min?: TonKhoMinAggregateInputType
    _max?: TonKhoMaxAggregateInputType
  }

  export type TonKhoGroupByOutputType = {
    maKho: string
    maSach: string
    soLuong: number
    viTriKe: string | null
    nguongMin: number
    nguongMax: number
    _count: TonKhoCountAggregateOutputType | null
    _avg: TonKhoAvgAggregateOutputType | null
    _sum: TonKhoSumAggregateOutputType | null
    _min: TonKhoMinAggregateOutputType | null
    _max: TonKhoMaxAggregateOutputType | null
  }

  type GetTonKhoGroupByPayload<T extends TonKhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TonKhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TonKhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TonKhoGroupByOutputType[P]>
            : GetScalarType<T[P], TonKhoGroupByOutputType[P]>
        }
      >
    >


  export type TonKhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maKho?: boolean
    maSach?: boolean
    soLuong?: boolean
    viTriKe?: boolean
    nguongMin?: boolean
    nguongMax?: boolean
    khoHang?: boolean | KhoHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tonKho"]>

  export type TonKhoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maKho?: boolean
    maSach?: boolean
    soLuong?: boolean
    viTriKe?: boolean
    nguongMin?: boolean
    nguongMax?: boolean
    khoHang?: boolean | KhoHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tonKho"]>

  export type TonKhoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maKho?: boolean
    maSach?: boolean
    soLuong?: boolean
    viTriKe?: boolean
    nguongMin?: boolean
    nguongMax?: boolean
    khoHang?: boolean | KhoHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tonKho"]>

  export type TonKhoSelectScalar = {
    maKho?: boolean
    maSach?: boolean
    soLuong?: boolean
    viTriKe?: boolean
    nguongMin?: boolean
    nguongMax?: boolean
  }

  export type TonKhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"maKho" | "maSach" | "soLuong" | "viTriKe" | "nguongMin" | "nguongMax", ExtArgs["result"]["tonKho"]>
  export type TonKhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    khoHang?: boolean | KhoHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
  }
  export type TonKhoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    khoHang?: boolean | KhoHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
  }
  export type TonKhoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    khoHang?: boolean | KhoHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
  }

  export type $TonKhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TonKho"
    objects: {
      khoHang: Prisma.$KhoHangPayload<ExtArgs>
      sach: Prisma.$SachPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      maKho: string
      maSach: string
      soLuong: number
      viTriKe: string | null
      nguongMin: number
      nguongMax: number
    }, ExtArgs["result"]["tonKho"]>
    composites: {}
  }

  type TonKhoGetPayload<S extends boolean | null | undefined | TonKhoDefaultArgs> = $Result.GetResult<Prisma.$TonKhoPayload, S>

  type TonKhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TonKhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TonKhoCountAggregateInputType | true
    }

  export interface TonKhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TonKho'], meta: { name: 'TonKho' } }
    /**
     * Find zero or one TonKho that matches the filter.
     * @param {TonKhoFindUniqueArgs} args - Arguments to find a TonKho
     * @example
     * // Get one TonKho
     * const tonKho = await prisma.tonKho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TonKhoFindUniqueArgs>(args: SelectSubset<T, TonKhoFindUniqueArgs<ExtArgs>>): Prisma__TonKhoClient<$Result.GetResult<Prisma.$TonKhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TonKho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TonKhoFindUniqueOrThrowArgs} args - Arguments to find a TonKho
     * @example
     * // Get one TonKho
     * const tonKho = await prisma.tonKho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TonKhoFindUniqueOrThrowArgs>(args: SelectSubset<T, TonKhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TonKhoClient<$Result.GetResult<Prisma.$TonKhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TonKho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TonKhoFindFirstArgs} args - Arguments to find a TonKho
     * @example
     * // Get one TonKho
     * const tonKho = await prisma.tonKho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TonKhoFindFirstArgs>(args?: SelectSubset<T, TonKhoFindFirstArgs<ExtArgs>>): Prisma__TonKhoClient<$Result.GetResult<Prisma.$TonKhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TonKho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TonKhoFindFirstOrThrowArgs} args - Arguments to find a TonKho
     * @example
     * // Get one TonKho
     * const tonKho = await prisma.tonKho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TonKhoFindFirstOrThrowArgs>(args?: SelectSubset<T, TonKhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TonKhoClient<$Result.GetResult<Prisma.$TonKhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TonKhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TonKhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TonKhos
     * const tonKhos = await prisma.tonKho.findMany()
     * 
     * // Get first 10 TonKhos
     * const tonKhos = await prisma.tonKho.findMany({ take: 10 })
     * 
     * // Only select the `maKho`
     * const tonKhoWithMaKhoOnly = await prisma.tonKho.findMany({ select: { maKho: true } })
     * 
     */
    findMany<T extends TonKhoFindManyArgs>(args?: SelectSubset<T, TonKhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TonKhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TonKho.
     * @param {TonKhoCreateArgs} args - Arguments to create a TonKho.
     * @example
     * // Create one TonKho
     * const TonKho = await prisma.tonKho.create({
     *   data: {
     *     // ... data to create a TonKho
     *   }
     * })
     * 
     */
    create<T extends TonKhoCreateArgs>(args: SelectSubset<T, TonKhoCreateArgs<ExtArgs>>): Prisma__TonKhoClient<$Result.GetResult<Prisma.$TonKhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TonKhos.
     * @param {TonKhoCreateManyArgs} args - Arguments to create many TonKhos.
     * @example
     * // Create many TonKhos
     * const tonKho = await prisma.tonKho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TonKhoCreateManyArgs>(args?: SelectSubset<T, TonKhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TonKhos and returns the data saved in the database.
     * @param {TonKhoCreateManyAndReturnArgs} args - Arguments to create many TonKhos.
     * @example
     * // Create many TonKhos
     * const tonKho = await prisma.tonKho.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TonKhos and only return the `maKho`
     * const tonKhoWithMaKhoOnly = await prisma.tonKho.createManyAndReturn({
     *   select: { maKho: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TonKhoCreateManyAndReturnArgs>(args?: SelectSubset<T, TonKhoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TonKhoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TonKho.
     * @param {TonKhoDeleteArgs} args - Arguments to delete one TonKho.
     * @example
     * // Delete one TonKho
     * const TonKho = await prisma.tonKho.delete({
     *   where: {
     *     // ... filter to delete one TonKho
     *   }
     * })
     * 
     */
    delete<T extends TonKhoDeleteArgs>(args: SelectSubset<T, TonKhoDeleteArgs<ExtArgs>>): Prisma__TonKhoClient<$Result.GetResult<Prisma.$TonKhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TonKho.
     * @param {TonKhoUpdateArgs} args - Arguments to update one TonKho.
     * @example
     * // Update one TonKho
     * const tonKho = await prisma.tonKho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TonKhoUpdateArgs>(args: SelectSubset<T, TonKhoUpdateArgs<ExtArgs>>): Prisma__TonKhoClient<$Result.GetResult<Prisma.$TonKhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TonKhos.
     * @param {TonKhoDeleteManyArgs} args - Arguments to filter TonKhos to delete.
     * @example
     * // Delete a few TonKhos
     * const { count } = await prisma.tonKho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TonKhoDeleteManyArgs>(args?: SelectSubset<T, TonKhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TonKhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TonKhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TonKhos
     * const tonKho = await prisma.tonKho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TonKhoUpdateManyArgs>(args: SelectSubset<T, TonKhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TonKhos and returns the data updated in the database.
     * @param {TonKhoUpdateManyAndReturnArgs} args - Arguments to update many TonKhos.
     * @example
     * // Update many TonKhos
     * const tonKho = await prisma.tonKho.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TonKhos and only return the `maKho`
     * const tonKhoWithMaKhoOnly = await prisma.tonKho.updateManyAndReturn({
     *   select: { maKho: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TonKhoUpdateManyAndReturnArgs>(args: SelectSubset<T, TonKhoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TonKhoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TonKho.
     * @param {TonKhoUpsertArgs} args - Arguments to update or create a TonKho.
     * @example
     * // Update or create a TonKho
     * const tonKho = await prisma.tonKho.upsert({
     *   create: {
     *     // ... data to create a TonKho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TonKho we want to update
     *   }
     * })
     */
    upsert<T extends TonKhoUpsertArgs>(args: SelectSubset<T, TonKhoUpsertArgs<ExtArgs>>): Prisma__TonKhoClient<$Result.GetResult<Prisma.$TonKhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TonKhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TonKhoCountArgs} args - Arguments to filter TonKhos to count.
     * @example
     * // Count the number of TonKhos
     * const count = await prisma.tonKho.count({
     *   where: {
     *     // ... the filter for the TonKhos we want to count
     *   }
     * })
    **/
    count<T extends TonKhoCountArgs>(
      args?: Subset<T, TonKhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TonKhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TonKho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TonKhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TonKhoAggregateArgs>(args: Subset<T, TonKhoAggregateArgs>): Prisma.PrismaPromise<GetTonKhoAggregateType<T>>

    /**
     * Group by TonKho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TonKhoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TonKhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TonKhoGroupByArgs['orderBy'] }
        : { orderBy?: TonKhoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TonKhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTonKhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TonKho model
   */
  readonly fields: TonKhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TonKho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TonKhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    khoHang<T extends KhoHangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KhoHangDefaultArgs<ExtArgs>>): Prisma__KhoHangClient<$Result.GetResult<Prisma.$KhoHangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sach<T extends SachDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SachDefaultArgs<ExtArgs>>): Prisma__SachClient<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TonKho model
   */
  interface TonKhoFieldRefs {
    readonly maKho: FieldRef<"TonKho", 'String'>
    readonly maSach: FieldRef<"TonKho", 'String'>
    readonly soLuong: FieldRef<"TonKho", 'Int'>
    readonly viTriKe: FieldRef<"TonKho", 'String'>
    readonly nguongMin: FieldRef<"TonKho", 'Int'>
    readonly nguongMax: FieldRef<"TonKho", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TonKho findUnique
   */
  export type TonKhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoInclude<ExtArgs> | null
    /**
     * Filter, which TonKho to fetch.
     */
    where: TonKhoWhereUniqueInput
  }

  /**
   * TonKho findUniqueOrThrow
   */
  export type TonKhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoInclude<ExtArgs> | null
    /**
     * Filter, which TonKho to fetch.
     */
    where: TonKhoWhereUniqueInput
  }

  /**
   * TonKho findFirst
   */
  export type TonKhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoInclude<ExtArgs> | null
    /**
     * Filter, which TonKho to fetch.
     */
    where?: TonKhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TonKhos to fetch.
     */
    orderBy?: TonKhoOrderByWithRelationInput | TonKhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TonKhos.
     */
    cursor?: TonKhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TonKhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TonKhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TonKhos.
     */
    distinct?: TonKhoScalarFieldEnum | TonKhoScalarFieldEnum[]
  }

  /**
   * TonKho findFirstOrThrow
   */
  export type TonKhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoInclude<ExtArgs> | null
    /**
     * Filter, which TonKho to fetch.
     */
    where?: TonKhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TonKhos to fetch.
     */
    orderBy?: TonKhoOrderByWithRelationInput | TonKhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TonKhos.
     */
    cursor?: TonKhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TonKhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TonKhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TonKhos.
     */
    distinct?: TonKhoScalarFieldEnum | TonKhoScalarFieldEnum[]
  }

  /**
   * TonKho findMany
   */
  export type TonKhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoInclude<ExtArgs> | null
    /**
     * Filter, which TonKhos to fetch.
     */
    where?: TonKhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TonKhos to fetch.
     */
    orderBy?: TonKhoOrderByWithRelationInput | TonKhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TonKhos.
     */
    cursor?: TonKhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TonKhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TonKhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TonKhos.
     */
    distinct?: TonKhoScalarFieldEnum | TonKhoScalarFieldEnum[]
  }

  /**
   * TonKho create
   */
  export type TonKhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoInclude<ExtArgs> | null
    /**
     * The data needed to create a TonKho.
     */
    data: XOR<TonKhoCreateInput, TonKhoUncheckedCreateInput>
  }

  /**
   * TonKho createMany
   */
  export type TonKhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TonKhos.
     */
    data: TonKhoCreateManyInput | TonKhoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TonKho createManyAndReturn
   */
  export type TonKhoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * The data used to create many TonKhos.
     */
    data: TonKhoCreateManyInput | TonKhoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TonKho update
   */
  export type TonKhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoInclude<ExtArgs> | null
    /**
     * The data needed to update a TonKho.
     */
    data: XOR<TonKhoUpdateInput, TonKhoUncheckedUpdateInput>
    /**
     * Choose, which TonKho to update.
     */
    where: TonKhoWhereUniqueInput
  }

  /**
   * TonKho updateMany
   */
  export type TonKhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TonKhos.
     */
    data: XOR<TonKhoUpdateManyMutationInput, TonKhoUncheckedUpdateManyInput>
    /**
     * Filter which TonKhos to update
     */
    where?: TonKhoWhereInput
    /**
     * Limit how many TonKhos to update.
     */
    limit?: number
  }

  /**
   * TonKho updateManyAndReturn
   */
  export type TonKhoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * The data used to update TonKhos.
     */
    data: XOR<TonKhoUpdateManyMutationInput, TonKhoUncheckedUpdateManyInput>
    /**
     * Filter which TonKhos to update
     */
    where?: TonKhoWhereInput
    /**
     * Limit how many TonKhos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TonKho upsert
   */
  export type TonKhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoInclude<ExtArgs> | null
    /**
     * The filter to search for the TonKho to update in case it exists.
     */
    where: TonKhoWhereUniqueInput
    /**
     * In case the TonKho found by the `where` argument doesn't exist, create a new TonKho with this data.
     */
    create: XOR<TonKhoCreateInput, TonKhoUncheckedCreateInput>
    /**
     * In case the TonKho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TonKhoUpdateInput, TonKhoUncheckedUpdateInput>
  }

  /**
   * TonKho delete
   */
  export type TonKhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoInclude<ExtArgs> | null
    /**
     * Filter which TonKho to delete.
     */
    where: TonKhoWhereUniqueInput
  }

  /**
   * TonKho deleteMany
   */
  export type TonKhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TonKhos to delete
     */
    where?: TonKhoWhereInput
    /**
     * Limit how many TonKhos to delete.
     */
    limit?: number
  }

  /**
   * TonKho without action
   */
  export type TonKhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TonKho
     */
    select?: TonKhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TonKho
     */
    omit?: TonKhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TonKhoInclude<ExtArgs> | null
  }


  /**
   * Model DonHang
   */

  export type AggregateDonHang = {
    _count: DonHangCountAggregateOutputType | null
    _avg: DonHangAvgAggregateOutputType | null
    _sum: DonHangSumAggregateOutputType | null
    _min: DonHangMinAggregateOutputType | null
    _max: DonHangMaxAggregateOutputType | null
  }

  export type DonHangAvgAggregateOutputType = {
    tongTien: Decimal | null
  }

  export type DonHangSumAggregateOutputType = {
    tongTien: Decimal | null
  }

  export type DonHangMinAggregateOutputType = {
    maDH: string | null
    maNV: string | null
    ngayTao: Date | null
    tongTien: Decimal | null
    trangThai: $Enums.TrangThaiDonHang | null
  }

  export type DonHangMaxAggregateOutputType = {
    maDH: string | null
    maNV: string | null
    ngayTao: Date | null
    tongTien: Decimal | null
    trangThai: $Enums.TrangThaiDonHang | null
  }

  export type DonHangCountAggregateOutputType = {
    maDH: number
    maNV: number
    ngayTao: number
    tongTien: number
    trangThai: number
    _all: number
  }


  export type DonHangAvgAggregateInputType = {
    tongTien?: true
  }

  export type DonHangSumAggregateInputType = {
    tongTien?: true
  }

  export type DonHangMinAggregateInputType = {
    maDH?: true
    maNV?: true
    ngayTao?: true
    tongTien?: true
    trangThai?: true
  }

  export type DonHangMaxAggregateInputType = {
    maDH?: true
    maNV?: true
    ngayTao?: true
    tongTien?: true
    trangThai?: true
  }

  export type DonHangCountAggregateInputType = {
    maDH?: true
    maNV?: true
    ngayTao?: true
    tongTien?: true
    trangThai?: true
    _all?: true
  }

  export type DonHangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonHang to aggregate.
     */
    where?: DonHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonHangs to fetch.
     */
    orderBy?: DonHangOrderByWithRelationInput | DonHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonHangs
    **/
    _count?: true | DonHangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonHangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonHangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonHangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonHangMaxAggregateInputType
  }

  export type GetDonHangAggregateType<T extends DonHangAggregateArgs> = {
        [P in keyof T & keyof AggregateDonHang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonHang[P]>
      : GetScalarType<T[P], AggregateDonHang[P]>
  }




  export type DonHangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonHangWhereInput
    orderBy?: DonHangOrderByWithAggregationInput | DonHangOrderByWithAggregationInput[]
    by: DonHangScalarFieldEnum[] | DonHangScalarFieldEnum
    having?: DonHangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonHangCountAggregateInputType | true
    _avg?: DonHangAvgAggregateInputType
    _sum?: DonHangSumAggregateInputType
    _min?: DonHangMinAggregateInputType
    _max?: DonHangMaxAggregateInputType
  }

  export type DonHangGroupByOutputType = {
    maDH: string
    maNV: string
    ngayTao: Date
    tongTien: Decimal
    trangThai: $Enums.TrangThaiDonHang
    _count: DonHangCountAggregateOutputType | null
    _avg: DonHangAvgAggregateOutputType | null
    _sum: DonHangSumAggregateOutputType | null
    _min: DonHangMinAggregateOutputType | null
    _max: DonHangMaxAggregateOutputType | null
  }

  type GetDonHangGroupByPayload<T extends DonHangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonHangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonHangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonHangGroupByOutputType[P]>
            : GetScalarType<T[P], DonHangGroupByOutputType[P]>
        }
      >
    >


  export type DonHangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maDH?: boolean
    maNV?: boolean
    ngayTao?: boolean
    tongTien?: boolean
    trangThai?: boolean
    nhanVien?: boolean | NhanVienDefaultArgs<ExtArgs>
    chiTiet?: boolean | DonHang$chiTietArgs<ExtArgs>
    _count?: boolean | DonHangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donHang"]>

  export type DonHangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maDH?: boolean
    maNV?: boolean
    ngayTao?: boolean
    tongTien?: boolean
    trangThai?: boolean
    nhanVien?: boolean | NhanVienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donHang"]>

  export type DonHangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maDH?: boolean
    maNV?: boolean
    ngayTao?: boolean
    tongTien?: boolean
    trangThai?: boolean
    nhanVien?: boolean | NhanVienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donHang"]>

  export type DonHangSelectScalar = {
    maDH?: boolean
    maNV?: boolean
    ngayTao?: boolean
    tongTien?: boolean
    trangThai?: boolean
  }

  export type DonHangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"maDH" | "maNV" | "ngayTao" | "tongTien" | "trangThai", ExtArgs["result"]["donHang"]>
  export type DonHangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nhanVien?: boolean | NhanVienDefaultArgs<ExtArgs>
    chiTiet?: boolean | DonHang$chiTietArgs<ExtArgs>
    _count?: boolean | DonHangCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DonHangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nhanVien?: boolean | NhanVienDefaultArgs<ExtArgs>
  }
  export type DonHangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nhanVien?: boolean | NhanVienDefaultArgs<ExtArgs>
  }

  export type $DonHangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonHang"
    objects: {
      nhanVien: Prisma.$NhanVienPayload<ExtArgs>
      chiTiet: Prisma.$ChiTietDonHangPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      maDH: string
      maNV: string
      ngayTao: Date
      tongTien: Prisma.Decimal
      trangThai: $Enums.TrangThaiDonHang
    }, ExtArgs["result"]["donHang"]>
    composites: {}
  }

  type DonHangGetPayload<S extends boolean | null | undefined | DonHangDefaultArgs> = $Result.GetResult<Prisma.$DonHangPayload, S>

  type DonHangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonHangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonHangCountAggregateInputType | true
    }

  export interface DonHangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonHang'], meta: { name: 'DonHang' } }
    /**
     * Find zero or one DonHang that matches the filter.
     * @param {DonHangFindUniqueArgs} args - Arguments to find a DonHang
     * @example
     * // Get one DonHang
     * const donHang = await prisma.donHang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonHangFindUniqueArgs>(args: SelectSubset<T, DonHangFindUniqueArgs<ExtArgs>>): Prisma__DonHangClient<$Result.GetResult<Prisma.$DonHangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonHang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonHangFindUniqueOrThrowArgs} args - Arguments to find a DonHang
     * @example
     * // Get one DonHang
     * const donHang = await prisma.donHang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonHangFindUniqueOrThrowArgs>(args: SelectSubset<T, DonHangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonHangClient<$Result.GetResult<Prisma.$DonHangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonHang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonHangFindFirstArgs} args - Arguments to find a DonHang
     * @example
     * // Get one DonHang
     * const donHang = await prisma.donHang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonHangFindFirstArgs>(args?: SelectSubset<T, DonHangFindFirstArgs<ExtArgs>>): Prisma__DonHangClient<$Result.GetResult<Prisma.$DonHangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonHang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonHangFindFirstOrThrowArgs} args - Arguments to find a DonHang
     * @example
     * // Get one DonHang
     * const donHang = await prisma.donHang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonHangFindFirstOrThrowArgs>(args?: SelectSubset<T, DonHangFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonHangClient<$Result.GetResult<Prisma.$DonHangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonHangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonHangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonHangs
     * const donHangs = await prisma.donHang.findMany()
     * 
     * // Get first 10 DonHangs
     * const donHangs = await prisma.donHang.findMany({ take: 10 })
     * 
     * // Only select the `maDH`
     * const donHangWithMaDHOnly = await prisma.donHang.findMany({ select: { maDH: true } })
     * 
     */
    findMany<T extends DonHangFindManyArgs>(args?: SelectSubset<T, DonHangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonHangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonHang.
     * @param {DonHangCreateArgs} args - Arguments to create a DonHang.
     * @example
     * // Create one DonHang
     * const DonHang = await prisma.donHang.create({
     *   data: {
     *     // ... data to create a DonHang
     *   }
     * })
     * 
     */
    create<T extends DonHangCreateArgs>(args: SelectSubset<T, DonHangCreateArgs<ExtArgs>>): Prisma__DonHangClient<$Result.GetResult<Prisma.$DonHangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonHangs.
     * @param {DonHangCreateManyArgs} args - Arguments to create many DonHangs.
     * @example
     * // Create many DonHangs
     * const donHang = await prisma.donHang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonHangCreateManyArgs>(args?: SelectSubset<T, DonHangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonHangs and returns the data saved in the database.
     * @param {DonHangCreateManyAndReturnArgs} args - Arguments to create many DonHangs.
     * @example
     * // Create many DonHangs
     * const donHang = await prisma.donHang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonHangs and only return the `maDH`
     * const donHangWithMaDHOnly = await prisma.donHang.createManyAndReturn({
     *   select: { maDH: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonHangCreateManyAndReturnArgs>(args?: SelectSubset<T, DonHangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonHangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonHang.
     * @param {DonHangDeleteArgs} args - Arguments to delete one DonHang.
     * @example
     * // Delete one DonHang
     * const DonHang = await prisma.donHang.delete({
     *   where: {
     *     // ... filter to delete one DonHang
     *   }
     * })
     * 
     */
    delete<T extends DonHangDeleteArgs>(args: SelectSubset<T, DonHangDeleteArgs<ExtArgs>>): Prisma__DonHangClient<$Result.GetResult<Prisma.$DonHangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonHang.
     * @param {DonHangUpdateArgs} args - Arguments to update one DonHang.
     * @example
     * // Update one DonHang
     * const donHang = await prisma.donHang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonHangUpdateArgs>(args: SelectSubset<T, DonHangUpdateArgs<ExtArgs>>): Prisma__DonHangClient<$Result.GetResult<Prisma.$DonHangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonHangs.
     * @param {DonHangDeleteManyArgs} args - Arguments to filter DonHangs to delete.
     * @example
     * // Delete a few DonHangs
     * const { count } = await prisma.donHang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonHangDeleteManyArgs>(args?: SelectSubset<T, DonHangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonHangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonHangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonHangs
     * const donHang = await prisma.donHang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonHangUpdateManyArgs>(args: SelectSubset<T, DonHangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonHangs and returns the data updated in the database.
     * @param {DonHangUpdateManyAndReturnArgs} args - Arguments to update many DonHangs.
     * @example
     * // Update many DonHangs
     * const donHang = await prisma.donHang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonHangs and only return the `maDH`
     * const donHangWithMaDHOnly = await prisma.donHang.updateManyAndReturn({
     *   select: { maDH: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonHangUpdateManyAndReturnArgs>(args: SelectSubset<T, DonHangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonHangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonHang.
     * @param {DonHangUpsertArgs} args - Arguments to update or create a DonHang.
     * @example
     * // Update or create a DonHang
     * const donHang = await prisma.donHang.upsert({
     *   create: {
     *     // ... data to create a DonHang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonHang we want to update
     *   }
     * })
     */
    upsert<T extends DonHangUpsertArgs>(args: SelectSubset<T, DonHangUpsertArgs<ExtArgs>>): Prisma__DonHangClient<$Result.GetResult<Prisma.$DonHangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonHangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonHangCountArgs} args - Arguments to filter DonHangs to count.
     * @example
     * // Count the number of DonHangs
     * const count = await prisma.donHang.count({
     *   where: {
     *     // ... the filter for the DonHangs we want to count
     *   }
     * })
    **/
    count<T extends DonHangCountArgs>(
      args?: Subset<T, DonHangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonHangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonHang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonHangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonHangAggregateArgs>(args: Subset<T, DonHangAggregateArgs>): Prisma.PrismaPromise<GetDonHangAggregateType<T>>

    /**
     * Group by DonHang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonHangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonHangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonHangGroupByArgs['orderBy'] }
        : { orderBy?: DonHangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonHangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonHangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonHang model
   */
  readonly fields: DonHangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonHang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonHangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nhanVien<T extends NhanVienDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NhanVienDefaultArgs<ExtArgs>>): Prisma__NhanVienClient<$Result.GetResult<Prisma.$NhanVienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chiTiet<T extends DonHang$chiTietArgs<ExtArgs> = {}>(args?: Subset<T, DonHang$chiTietArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiTietDonHangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DonHang model
   */
  interface DonHangFieldRefs {
    readonly maDH: FieldRef<"DonHang", 'String'>
    readonly maNV: FieldRef<"DonHang", 'String'>
    readonly ngayTao: FieldRef<"DonHang", 'DateTime'>
    readonly tongTien: FieldRef<"DonHang", 'Decimal'>
    readonly trangThai: FieldRef<"DonHang", 'TrangThaiDonHang'>
  }
    

  // Custom InputTypes
  /**
   * DonHang findUnique
   */
  export type DonHangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHang
     */
    select?: DonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonHang
     */
    omit?: DonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonHangInclude<ExtArgs> | null
    /**
     * Filter, which DonHang to fetch.
     */
    where: DonHangWhereUniqueInput
  }

  /**
   * DonHang findUniqueOrThrow
   */
  export type DonHangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHang
     */
    select?: DonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonHang
     */
    omit?: DonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonHangInclude<ExtArgs> | null
    /**
     * Filter, which DonHang to fetch.
     */
    where: DonHangWhereUniqueInput
  }

  /**
   * DonHang findFirst
   */
  export type DonHangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHang
     */
    select?: DonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonHang
     */
    omit?: DonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonHangInclude<ExtArgs> | null
    /**
     * Filter, which DonHang to fetch.
     */
    where?: DonHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonHangs to fetch.
     */
    orderBy?: DonHangOrderByWithRelationInput | DonHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonHangs.
     */
    cursor?: DonHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonHangs.
     */
    distinct?: DonHangScalarFieldEnum | DonHangScalarFieldEnum[]
  }

  /**
   * DonHang findFirstOrThrow
   */
  export type DonHangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHang
     */
    select?: DonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonHang
     */
    omit?: DonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonHangInclude<ExtArgs> | null
    /**
     * Filter, which DonHang to fetch.
     */
    where?: DonHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonHangs to fetch.
     */
    orderBy?: DonHangOrderByWithRelationInput | DonHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonHangs.
     */
    cursor?: DonHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonHangs.
     */
    distinct?: DonHangScalarFieldEnum | DonHangScalarFieldEnum[]
  }

  /**
   * DonHang findMany
   */
  export type DonHangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHang
     */
    select?: DonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonHang
     */
    omit?: DonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonHangInclude<ExtArgs> | null
    /**
     * Filter, which DonHangs to fetch.
     */
    where?: DonHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonHangs to fetch.
     */
    orderBy?: DonHangOrderByWithRelationInput | DonHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonHangs.
     */
    cursor?: DonHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonHangs.
     */
    distinct?: DonHangScalarFieldEnum | DonHangScalarFieldEnum[]
  }

  /**
   * DonHang create
   */
  export type DonHangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHang
     */
    select?: DonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonHang
     */
    omit?: DonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonHangInclude<ExtArgs> | null
    /**
     * The data needed to create a DonHang.
     */
    data: XOR<DonHangCreateInput, DonHangUncheckedCreateInput>
  }

  /**
   * DonHang createMany
   */
  export type DonHangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonHangs.
     */
    data: DonHangCreateManyInput | DonHangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonHang createManyAndReturn
   */
  export type DonHangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHang
     */
    select?: DonHangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonHang
     */
    omit?: DonHangOmit<ExtArgs> | null
    /**
     * The data used to create many DonHangs.
     */
    data: DonHangCreateManyInput | DonHangCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonHangIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonHang update
   */
  export type DonHangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHang
     */
    select?: DonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonHang
     */
    omit?: DonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonHangInclude<ExtArgs> | null
    /**
     * The data needed to update a DonHang.
     */
    data: XOR<DonHangUpdateInput, DonHangUncheckedUpdateInput>
    /**
     * Choose, which DonHang to update.
     */
    where: DonHangWhereUniqueInput
  }

  /**
   * DonHang updateMany
   */
  export type DonHangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonHangs.
     */
    data: XOR<DonHangUpdateManyMutationInput, DonHangUncheckedUpdateManyInput>
    /**
     * Filter which DonHangs to update
     */
    where?: DonHangWhereInput
    /**
     * Limit how many DonHangs to update.
     */
    limit?: number
  }

  /**
   * DonHang updateManyAndReturn
   */
  export type DonHangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHang
     */
    select?: DonHangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonHang
     */
    omit?: DonHangOmit<ExtArgs> | null
    /**
     * The data used to update DonHangs.
     */
    data: XOR<DonHangUpdateManyMutationInput, DonHangUncheckedUpdateManyInput>
    /**
     * Filter which DonHangs to update
     */
    where?: DonHangWhereInput
    /**
     * Limit how many DonHangs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonHangIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonHang upsert
   */
  export type DonHangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHang
     */
    select?: DonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonHang
     */
    omit?: DonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonHangInclude<ExtArgs> | null
    /**
     * The filter to search for the DonHang to update in case it exists.
     */
    where: DonHangWhereUniqueInput
    /**
     * In case the DonHang found by the `where` argument doesn't exist, create a new DonHang with this data.
     */
    create: XOR<DonHangCreateInput, DonHangUncheckedCreateInput>
    /**
     * In case the DonHang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonHangUpdateInput, DonHangUncheckedUpdateInput>
  }

  /**
   * DonHang delete
   */
  export type DonHangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHang
     */
    select?: DonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonHang
     */
    omit?: DonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonHangInclude<ExtArgs> | null
    /**
     * Filter which DonHang to delete.
     */
    where: DonHangWhereUniqueInput
  }

  /**
   * DonHang deleteMany
   */
  export type DonHangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonHangs to delete
     */
    where?: DonHangWhereInput
    /**
     * Limit how many DonHangs to delete.
     */
    limit?: number
  }

  /**
   * DonHang.chiTiet
   */
  export type DonHang$chiTietArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangInclude<ExtArgs> | null
    where?: ChiTietDonHangWhereInput
    orderBy?: ChiTietDonHangOrderByWithRelationInput | ChiTietDonHangOrderByWithRelationInput[]
    cursor?: ChiTietDonHangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChiTietDonHangScalarFieldEnum | ChiTietDonHangScalarFieldEnum[]
  }

  /**
   * DonHang without action
   */
  export type DonHangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonHang
     */
    select?: DonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonHang
     */
    omit?: DonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonHangInclude<ExtArgs> | null
  }


  /**
   * Model ChiTietDonHang
   */

  export type AggregateChiTietDonHang = {
    _count: ChiTietDonHangCountAggregateOutputType | null
    _avg: ChiTietDonHangAvgAggregateOutputType | null
    _sum: ChiTietDonHangSumAggregateOutputType | null
    _min: ChiTietDonHangMinAggregateOutputType | null
    _max: ChiTietDonHangMaxAggregateOutputType | null
  }

  export type ChiTietDonHangAvgAggregateOutputType = {
    soLuong: number | null
    donGia: Decimal | null
  }

  export type ChiTietDonHangSumAggregateOutputType = {
    soLuong: number | null
    donGia: Decimal | null
  }

  export type ChiTietDonHangMinAggregateOutputType = {
    maDH: string | null
    maSach: string | null
    soLuong: number | null
    donGia: Decimal | null
  }

  export type ChiTietDonHangMaxAggregateOutputType = {
    maDH: string | null
    maSach: string | null
    soLuong: number | null
    donGia: Decimal | null
  }

  export type ChiTietDonHangCountAggregateOutputType = {
    maDH: number
    maSach: number
    soLuong: number
    donGia: number
    _all: number
  }


  export type ChiTietDonHangAvgAggregateInputType = {
    soLuong?: true
    donGia?: true
  }

  export type ChiTietDonHangSumAggregateInputType = {
    soLuong?: true
    donGia?: true
  }

  export type ChiTietDonHangMinAggregateInputType = {
    maDH?: true
    maSach?: true
    soLuong?: true
    donGia?: true
  }

  export type ChiTietDonHangMaxAggregateInputType = {
    maDH?: true
    maSach?: true
    soLuong?: true
    donGia?: true
  }

  export type ChiTietDonHangCountAggregateInputType = {
    maDH?: true
    maSach?: true
    soLuong?: true
    donGia?: true
    _all?: true
  }

  export type ChiTietDonHangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChiTietDonHang to aggregate.
     */
    where?: ChiTietDonHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiTietDonHangs to fetch.
     */
    orderBy?: ChiTietDonHangOrderByWithRelationInput | ChiTietDonHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChiTietDonHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiTietDonHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiTietDonHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChiTietDonHangs
    **/
    _count?: true | ChiTietDonHangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChiTietDonHangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChiTietDonHangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChiTietDonHangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChiTietDonHangMaxAggregateInputType
  }

  export type GetChiTietDonHangAggregateType<T extends ChiTietDonHangAggregateArgs> = {
        [P in keyof T & keyof AggregateChiTietDonHang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChiTietDonHang[P]>
      : GetScalarType<T[P], AggregateChiTietDonHang[P]>
  }




  export type ChiTietDonHangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChiTietDonHangWhereInput
    orderBy?: ChiTietDonHangOrderByWithAggregationInput | ChiTietDonHangOrderByWithAggregationInput[]
    by: ChiTietDonHangScalarFieldEnum[] | ChiTietDonHangScalarFieldEnum
    having?: ChiTietDonHangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChiTietDonHangCountAggregateInputType | true
    _avg?: ChiTietDonHangAvgAggregateInputType
    _sum?: ChiTietDonHangSumAggregateInputType
    _min?: ChiTietDonHangMinAggregateInputType
    _max?: ChiTietDonHangMaxAggregateInputType
  }

  export type ChiTietDonHangGroupByOutputType = {
    maDH: string
    maSach: string
    soLuong: number
    donGia: Decimal
    _count: ChiTietDonHangCountAggregateOutputType | null
    _avg: ChiTietDonHangAvgAggregateOutputType | null
    _sum: ChiTietDonHangSumAggregateOutputType | null
    _min: ChiTietDonHangMinAggregateOutputType | null
    _max: ChiTietDonHangMaxAggregateOutputType | null
  }

  type GetChiTietDonHangGroupByPayload<T extends ChiTietDonHangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChiTietDonHangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChiTietDonHangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChiTietDonHangGroupByOutputType[P]>
            : GetScalarType<T[P], ChiTietDonHangGroupByOutputType[P]>
        }
      >
    >


  export type ChiTietDonHangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maDH?: boolean
    maSach?: boolean
    soLuong?: boolean
    donGia?: boolean
    donHang?: boolean | DonHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chiTietDonHang"]>

  export type ChiTietDonHangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maDH?: boolean
    maSach?: boolean
    soLuong?: boolean
    donGia?: boolean
    donHang?: boolean | DonHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chiTietDonHang"]>

  export type ChiTietDonHangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maDH?: boolean
    maSach?: boolean
    soLuong?: boolean
    donGia?: boolean
    donHang?: boolean | DonHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chiTietDonHang"]>

  export type ChiTietDonHangSelectScalar = {
    maDH?: boolean
    maSach?: boolean
    soLuong?: boolean
    donGia?: boolean
  }

  export type ChiTietDonHangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"maDH" | "maSach" | "soLuong" | "donGia", ExtArgs["result"]["chiTietDonHang"]>
  export type ChiTietDonHangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donHang?: boolean | DonHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
  }
  export type ChiTietDonHangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donHang?: boolean | DonHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
  }
  export type ChiTietDonHangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donHang?: boolean | DonHangDefaultArgs<ExtArgs>
    sach?: boolean | SachDefaultArgs<ExtArgs>
  }

  export type $ChiTietDonHangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChiTietDonHang"
    objects: {
      donHang: Prisma.$DonHangPayload<ExtArgs>
      sach: Prisma.$SachPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      maDH: string
      maSach: string
      soLuong: number
      donGia: Prisma.Decimal
    }, ExtArgs["result"]["chiTietDonHang"]>
    composites: {}
  }

  type ChiTietDonHangGetPayload<S extends boolean | null | undefined | ChiTietDonHangDefaultArgs> = $Result.GetResult<Prisma.$ChiTietDonHangPayload, S>

  type ChiTietDonHangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChiTietDonHangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChiTietDonHangCountAggregateInputType | true
    }

  export interface ChiTietDonHangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChiTietDonHang'], meta: { name: 'ChiTietDonHang' } }
    /**
     * Find zero or one ChiTietDonHang that matches the filter.
     * @param {ChiTietDonHangFindUniqueArgs} args - Arguments to find a ChiTietDonHang
     * @example
     * // Get one ChiTietDonHang
     * const chiTietDonHang = await prisma.chiTietDonHang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChiTietDonHangFindUniqueArgs>(args: SelectSubset<T, ChiTietDonHangFindUniqueArgs<ExtArgs>>): Prisma__ChiTietDonHangClient<$Result.GetResult<Prisma.$ChiTietDonHangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChiTietDonHang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChiTietDonHangFindUniqueOrThrowArgs} args - Arguments to find a ChiTietDonHang
     * @example
     * // Get one ChiTietDonHang
     * const chiTietDonHang = await prisma.chiTietDonHang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChiTietDonHangFindUniqueOrThrowArgs>(args: SelectSubset<T, ChiTietDonHangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChiTietDonHangClient<$Result.GetResult<Prisma.$ChiTietDonHangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChiTietDonHang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDonHangFindFirstArgs} args - Arguments to find a ChiTietDonHang
     * @example
     * // Get one ChiTietDonHang
     * const chiTietDonHang = await prisma.chiTietDonHang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChiTietDonHangFindFirstArgs>(args?: SelectSubset<T, ChiTietDonHangFindFirstArgs<ExtArgs>>): Prisma__ChiTietDonHangClient<$Result.GetResult<Prisma.$ChiTietDonHangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChiTietDonHang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDonHangFindFirstOrThrowArgs} args - Arguments to find a ChiTietDonHang
     * @example
     * // Get one ChiTietDonHang
     * const chiTietDonHang = await prisma.chiTietDonHang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChiTietDonHangFindFirstOrThrowArgs>(args?: SelectSubset<T, ChiTietDonHangFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChiTietDonHangClient<$Result.GetResult<Prisma.$ChiTietDonHangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChiTietDonHangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDonHangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChiTietDonHangs
     * const chiTietDonHangs = await prisma.chiTietDonHang.findMany()
     * 
     * // Get first 10 ChiTietDonHangs
     * const chiTietDonHangs = await prisma.chiTietDonHang.findMany({ take: 10 })
     * 
     * // Only select the `maDH`
     * const chiTietDonHangWithMaDHOnly = await prisma.chiTietDonHang.findMany({ select: { maDH: true } })
     * 
     */
    findMany<T extends ChiTietDonHangFindManyArgs>(args?: SelectSubset<T, ChiTietDonHangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiTietDonHangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChiTietDonHang.
     * @param {ChiTietDonHangCreateArgs} args - Arguments to create a ChiTietDonHang.
     * @example
     * // Create one ChiTietDonHang
     * const ChiTietDonHang = await prisma.chiTietDonHang.create({
     *   data: {
     *     // ... data to create a ChiTietDonHang
     *   }
     * })
     * 
     */
    create<T extends ChiTietDonHangCreateArgs>(args: SelectSubset<T, ChiTietDonHangCreateArgs<ExtArgs>>): Prisma__ChiTietDonHangClient<$Result.GetResult<Prisma.$ChiTietDonHangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChiTietDonHangs.
     * @param {ChiTietDonHangCreateManyArgs} args - Arguments to create many ChiTietDonHangs.
     * @example
     * // Create many ChiTietDonHangs
     * const chiTietDonHang = await prisma.chiTietDonHang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChiTietDonHangCreateManyArgs>(args?: SelectSubset<T, ChiTietDonHangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChiTietDonHangs and returns the data saved in the database.
     * @param {ChiTietDonHangCreateManyAndReturnArgs} args - Arguments to create many ChiTietDonHangs.
     * @example
     * // Create many ChiTietDonHangs
     * const chiTietDonHang = await prisma.chiTietDonHang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChiTietDonHangs and only return the `maDH`
     * const chiTietDonHangWithMaDHOnly = await prisma.chiTietDonHang.createManyAndReturn({
     *   select: { maDH: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChiTietDonHangCreateManyAndReturnArgs>(args?: SelectSubset<T, ChiTietDonHangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiTietDonHangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChiTietDonHang.
     * @param {ChiTietDonHangDeleteArgs} args - Arguments to delete one ChiTietDonHang.
     * @example
     * // Delete one ChiTietDonHang
     * const ChiTietDonHang = await prisma.chiTietDonHang.delete({
     *   where: {
     *     // ... filter to delete one ChiTietDonHang
     *   }
     * })
     * 
     */
    delete<T extends ChiTietDonHangDeleteArgs>(args: SelectSubset<T, ChiTietDonHangDeleteArgs<ExtArgs>>): Prisma__ChiTietDonHangClient<$Result.GetResult<Prisma.$ChiTietDonHangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChiTietDonHang.
     * @param {ChiTietDonHangUpdateArgs} args - Arguments to update one ChiTietDonHang.
     * @example
     * // Update one ChiTietDonHang
     * const chiTietDonHang = await prisma.chiTietDonHang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChiTietDonHangUpdateArgs>(args: SelectSubset<T, ChiTietDonHangUpdateArgs<ExtArgs>>): Prisma__ChiTietDonHangClient<$Result.GetResult<Prisma.$ChiTietDonHangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChiTietDonHangs.
     * @param {ChiTietDonHangDeleteManyArgs} args - Arguments to filter ChiTietDonHangs to delete.
     * @example
     * // Delete a few ChiTietDonHangs
     * const { count } = await prisma.chiTietDonHang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChiTietDonHangDeleteManyArgs>(args?: SelectSubset<T, ChiTietDonHangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChiTietDonHangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDonHangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChiTietDonHangs
     * const chiTietDonHang = await prisma.chiTietDonHang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChiTietDonHangUpdateManyArgs>(args: SelectSubset<T, ChiTietDonHangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChiTietDonHangs and returns the data updated in the database.
     * @param {ChiTietDonHangUpdateManyAndReturnArgs} args - Arguments to update many ChiTietDonHangs.
     * @example
     * // Update many ChiTietDonHangs
     * const chiTietDonHang = await prisma.chiTietDonHang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChiTietDonHangs and only return the `maDH`
     * const chiTietDonHangWithMaDHOnly = await prisma.chiTietDonHang.updateManyAndReturn({
     *   select: { maDH: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChiTietDonHangUpdateManyAndReturnArgs>(args: SelectSubset<T, ChiTietDonHangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiTietDonHangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChiTietDonHang.
     * @param {ChiTietDonHangUpsertArgs} args - Arguments to update or create a ChiTietDonHang.
     * @example
     * // Update or create a ChiTietDonHang
     * const chiTietDonHang = await prisma.chiTietDonHang.upsert({
     *   create: {
     *     // ... data to create a ChiTietDonHang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChiTietDonHang we want to update
     *   }
     * })
     */
    upsert<T extends ChiTietDonHangUpsertArgs>(args: SelectSubset<T, ChiTietDonHangUpsertArgs<ExtArgs>>): Prisma__ChiTietDonHangClient<$Result.GetResult<Prisma.$ChiTietDonHangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChiTietDonHangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDonHangCountArgs} args - Arguments to filter ChiTietDonHangs to count.
     * @example
     * // Count the number of ChiTietDonHangs
     * const count = await prisma.chiTietDonHang.count({
     *   where: {
     *     // ... the filter for the ChiTietDonHangs we want to count
     *   }
     * })
    **/
    count<T extends ChiTietDonHangCountArgs>(
      args?: Subset<T, ChiTietDonHangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChiTietDonHangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChiTietDonHang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDonHangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChiTietDonHangAggregateArgs>(args: Subset<T, ChiTietDonHangAggregateArgs>): Prisma.PrismaPromise<GetChiTietDonHangAggregateType<T>>

    /**
     * Group by ChiTietDonHang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDonHangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChiTietDonHangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChiTietDonHangGroupByArgs['orderBy'] }
        : { orderBy?: ChiTietDonHangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChiTietDonHangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChiTietDonHangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChiTietDonHang model
   */
  readonly fields: ChiTietDonHangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChiTietDonHang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChiTietDonHangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donHang<T extends DonHangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonHangDefaultArgs<ExtArgs>>): Prisma__DonHangClient<$Result.GetResult<Prisma.$DonHangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sach<T extends SachDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SachDefaultArgs<ExtArgs>>): Prisma__SachClient<$Result.GetResult<Prisma.$SachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChiTietDonHang model
   */
  interface ChiTietDonHangFieldRefs {
    readonly maDH: FieldRef<"ChiTietDonHang", 'String'>
    readonly maSach: FieldRef<"ChiTietDonHang", 'String'>
    readonly soLuong: FieldRef<"ChiTietDonHang", 'Int'>
    readonly donGia: FieldRef<"ChiTietDonHang", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * ChiTietDonHang findUnique
   */
  export type ChiTietDonHangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietDonHang to fetch.
     */
    where: ChiTietDonHangWhereUniqueInput
  }

  /**
   * ChiTietDonHang findUniqueOrThrow
   */
  export type ChiTietDonHangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietDonHang to fetch.
     */
    where: ChiTietDonHangWhereUniqueInput
  }

  /**
   * ChiTietDonHang findFirst
   */
  export type ChiTietDonHangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietDonHang to fetch.
     */
    where?: ChiTietDonHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiTietDonHangs to fetch.
     */
    orderBy?: ChiTietDonHangOrderByWithRelationInput | ChiTietDonHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChiTietDonHangs.
     */
    cursor?: ChiTietDonHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiTietDonHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiTietDonHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChiTietDonHangs.
     */
    distinct?: ChiTietDonHangScalarFieldEnum | ChiTietDonHangScalarFieldEnum[]
  }

  /**
   * ChiTietDonHang findFirstOrThrow
   */
  export type ChiTietDonHangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietDonHang to fetch.
     */
    where?: ChiTietDonHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiTietDonHangs to fetch.
     */
    orderBy?: ChiTietDonHangOrderByWithRelationInput | ChiTietDonHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChiTietDonHangs.
     */
    cursor?: ChiTietDonHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiTietDonHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiTietDonHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChiTietDonHangs.
     */
    distinct?: ChiTietDonHangScalarFieldEnum | ChiTietDonHangScalarFieldEnum[]
  }

  /**
   * ChiTietDonHang findMany
   */
  export type ChiTietDonHangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietDonHangs to fetch.
     */
    where?: ChiTietDonHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiTietDonHangs to fetch.
     */
    orderBy?: ChiTietDonHangOrderByWithRelationInput | ChiTietDonHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChiTietDonHangs.
     */
    cursor?: ChiTietDonHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiTietDonHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiTietDonHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChiTietDonHangs.
     */
    distinct?: ChiTietDonHangScalarFieldEnum | ChiTietDonHangScalarFieldEnum[]
  }

  /**
   * ChiTietDonHang create
   */
  export type ChiTietDonHangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangInclude<ExtArgs> | null
    /**
     * The data needed to create a ChiTietDonHang.
     */
    data: XOR<ChiTietDonHangCreateInput, ChiTietDonHangUncheckedCreateInput>
  }

  /**
   * ChiTietDonHang createMany
   */
  export type ChiTietDonHangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChiTietDonHangs.
     */
    data: ChiTietDonHangCreateManyInput | ChiTietDonHangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChiTietDonHang createManyAndReturn
   */
  export type ChiTietDonHangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * The data used to create many ChiTietDonHangs.
     */
    data: ChiTietDonHangCreateManyInput | ChiTietDonHangCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChiTietDonHang update
   */
  export type ChiTietDonHangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangInclude<ExtArgs> | null
    /**
     * The data needed to update a ChiTietDonHang.
     */
    data: XOR<ChiTietDonHangUpdateInput, ChiTietDonHangUncheckedUpdateInput>
    /**
     * Choose, which ChiTietDonHang to update.
     */
    where: ChiTietDonHangWhereUniqueInput
  }

  /**
   * ChiTietDonHang updateMany
   */
  export type ChiTietDonHangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChiTietDonHangs.
     */
    data: XOR<ChiTietDonHangUpdateManyMutationInput, ChiTietDonHangUncheckedUpdateManyInput>
    /**
     * Filter which ChiTietDonHangs to update
     */
    where?: ChiTietDonHangWhereInput
    /**
     * Limit how many ChiTietDonHangs to update.
     */
    limit?: number
  }

  /**
   * ChiTietDonHang updateManyAndReturn
   */
  export type ChiTietDonHangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * The data used to update ChiTietDonHangs.
     */
    data: XOR<ChiTietDonHangUpdateManyMutationInput, ChiTietDonHangUncheckedUpdateManyInput>
    /**
     * Filter which ChiTietDonHangs to update
     */
    where?: ChiTietDonHangWhereInput
    /**
     * Limit how many ChiTietDonHangs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChiTietDonHang upsert
   */
  export type ChiTietDonHangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangInclude<ExtArgs> | null
    /**
     * The filter to search for the ChiTietDonHang to update in case it exists.
     */
    where: ChiTietDonHangWhereUniqueInput
    /**
     * In case the ChiTietDonHang found by the `where` argument doesn't exist, create a new ChiTietDonHang with this data.
     */
    create: XOR<ChiTietDonHangCreateInput, ChiTietDonHangUncheckedCreateInput>
    /**
     * In case the ChiTietDonHang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChiTietDonHangUpdateInput, ChiTietDonHangUncheckedUpdateInput>
  }

  /**
   * ChiTietDonHang delete
   */
  export type ChiTietDonHangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangInclude<ExtArgs> | null
    /**
     * Filter which ChiTietDonHang to delete.
     */
    where: ChiTietDonHangWhereUniqueInput
  }

  /**
   * ChiTietDonHang deleteMany
   */
  export type ChiTietDonHangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChiTietDonHangs to delete
     */
    where?: ChiTietDonHangWhereInput
    /**
     * Limit how many ChiTietDonHangs to delete.
     */
    limit?: number
  }

  /**
   * ChiTietDonHang without action
   */
  export type ChiTietDonHangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDonHang
     */
    select?: ChiTietDonHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDonHang
     */
    omit?: ChiTietDonHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDonHangInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NhanVienScalarFieldEnum: {
    maNV: 'maNV',
    matKhau: 'matKhau',
    hoTen: 'hoTen',
    chucVu: 'chucVu'
  };

  export type NhanVienScalarFieldEnum = (typeof NhanVienScalarFieldEnum)[keyof typeof NhanVienScalarFieldEnum]


  export const KhoHangScalarFieldEnum: {
    maKho: 'maKho',
    tenKho: 'tenKho',
    diaChi: 'diaChi',
    sdt: 'sdt'
  };

  export type KhoHangScalarFieldEnum = (typeof KhoHangScalarFieldEnum)[keyof typeof KhoHangScalarFieldEnum]


  export const SachScalarFieldEnum: {
    maSach: 'maSach',
    tenSach: 'tenSach',
    tacGia: 'tacGia',
    nxb: 'nxb',
    giaNhap: 'giaNhap',
    giaSach: 'giaSach',
    trangThai: 'trangThai',
    anhBia: 'anhBia'
  };

  export type SachScalarFieldEnum = (typeof SachScalarFieldEnum)[keyof typeof SachScalarFieldEnum]


  export const GiaoDichKhoScalarFieldEnum: {
    maGD: 'maGD',
    maKho: 'maKho',
    maSach: 'maSach',
    maNV: 'maNV',
    loaiGD: 'loaiGD',
    thoiGian: 'thoiGian',
    soLuong: 'soLuong',
    ghiChu: 'ghiChu'
  };

  export type GiaoDichKhoScalarFieldEnum = (typeof GiaoDichKhoScalarFieldEnum)[keyof typeof GiaoDichKhoScalarFieldEnum]


  export const TonKhoScalarFieldEnum: {
    maKho: 'maKho',
    maSach: 'maSach',
    soLuong: 'soLuong',
    viTriKe: 'viTriKe',
    nguongMin: 'nguongMin',
    nguongMax: 'nguongMax'
  };

  export type TonKhoScalarFieldEnum = (typeof TonKhoScalarFieldEnum)[keyof typeof TonKhoScalarFieldEnum]


  export const DonHangScalarFieldEnum: {
    maDH: 'maDH',
    maNV: 'maNV',
    ngayTao: 'ngayTao',
    tongTien: 'tongTien',
    trangThai: 'trangThai'
  };

  export type DonHangScalarFieldEnum = (typeof DonHangScalarFieldEnum)[keyof typeof DonHangScalarFieldEnum]


  export const ChiTietDonHangScalarFieldEnum: {
    maDH: 'maDH',
    maSach: 'maSach',
    soLuong: 'soLuong',
    donGia: 'donGia'
  };

  export type ChiTietDonHangScalarFieldEnum = (typeof ChiTietDonHangScalarFieldEnum)[keyof typeof ChiTietDonHangScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ChucVu'
   */
  export type EnumChucVuFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChucVu'>
    


  /**
   * Reference to a field of type 'ChucVu[]'
   */
  export type ListEnumChucVuFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChucVu[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TrangThaiSach'
   */
  export type EnumTrangThaiSachFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrangThaiSach'>
    


  /**
   * Reference to a field of type 'TrangThaiSach[]'
   */
  export type ListEnumTrangThaiSachFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrangThaiSach[]'>
    


  /**
   * Reference to a field of type 'LoaiGiaoDich'
   */
  export type EnumLoaiGiaoDichFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoaiGiaoDich'>
    


  /**
   * Reference to a field of type 'LoaiGiaoDich[]'
   */
  export type ListEnumLoaiGiaoDichFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoaiGiaoDich[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TrangThaiDonHang'
   */
  export type EnumTrangThaiDonHangFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrangThaiDonHang'>
    


  /**
   * Reference to a field of type 'TrangThaiDonHang[]'
   */
  export type ListEnumTrangThaiDonHangFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrangThaiDonHang[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type NhanVienWhereInput = {
    AND?: NhanVienWhereInput | NhanVienWhereInput[]
    OR?: NhanVienWhereInput[]
    NOT?: NhanVienWhereInput | NhanVienWhereInput[]
    maNV?: StringFilter<"NhanVien"> | string
    matKhau?: StringFilter<"NhanVien"> | string
    hoTen?: StringFilter<"NhanVien"> | string
    chucVu?: EnumChucVuFilter<"NhanVien"> | $Enums.ChucVu
    giaoDichKho?: GiaoDichKhoListRelationFilter
    donHang?: DonHangListRelationFilter
  }

  export type NhanVienOrderByWithRelationInput = {
    maNV?: SortOrder
    matKhau?: SortOrder
    hoTen?: SortOrder
    chucVu?: SortOrder
    giaoDichKho?: GiaoDichKhoOrderByRelationAggregateInput
    donHang?: DonHangOrderByRelationAggregateInput
  }

  export type NhanVienWhereUniqueInput = Prisma.AtLeast<{
    maNV?: string
    AND?: NhanVienWhereInput | NhanVienWhereInput[]
    OR?: NhanVienWhereInput[]
    NOT?: NhanVienWhereInput | NhanVienWhereInput[]
    matKhau?: StringFilter<"NhanVien"> | string
    hoTen?: StringFilter<"NhanVien"> | string
    chucVu?: EnumChucVuFilter<"NhanVien"> | $Enums.ChucVu
    giaoDichKho?: GiaoDichKhoListRelationFilter
    donHang?: DonHangListRelationFilter
  }, "maNV">

  export type NhanVienOrderByWithAggregationInput = {
    maNV?: SortOrder
    matKhau?: SortOrder
    hoTen?: SortOrder
    chucVu?: SortOrder
    _count?: NhanVienCountOrderByAggregateInput
    _max?: NhanVienMaxOrderByAggregateInput
    _min?: NhanVienMinOrderByAggregateInput
  }

  export type NhanVienScalarWhereWithAggregatesInput = {
    AND?: NhanVienScalarWhereWithAggregatesInput | NhanVienScalarWhereWithAggregatesInput[]
    OR?: NhanVienScalarWhereWithAggregatesInput[]
    NOT?: NhanVienScalarWhereWithAggregatesInput | NhanVienScalarWhereWithAggregatesInput[]
    maNV?: StringWithAggregatesFilter<"NhanVien"> | string
    matKhau?: StringWithAggregatesFilter<"NhanVien"> | string
    hoTen?: StringWithAggregatesFilter<"NhanVien"> | string
    chucVu?: EnumChucVuWithAggregatesFilter<"NhanVien"> | $Enums.ChucVu
  }

  export type KhoHangWhereInput = {
    AND?: KhoHangWhereInput | KhoHangWhereInput[]
    OR?: KhoHangWhereInput[]
    NOT?: KhoHangWhereInput | KhoHangWhereInput[]
    maKho?: StringFilter<"KhoHang"> | string
    tenKho?: StringFilter<"KhoHang"> | string
    diaChi?: StringFilter<"KhoHang"> | string
    sdt?: StringNullableFilter<"KhoHang"> | string | null
    giaoDichKho?: GiaoDichKhoListRelationFilter
    tonKho?: TonKhoListRelationFilter
  }

  export type KhoHangOrderByWithRelationInput = {
    maKho?: SortOrder
    tenKho?: SortOrder
    diaChi?: SortOrder
    sdt?: SortOrderInput | SortOrder
    giaoDichKho?: GiaoDichKhoOrderByRelationAggregateInput
    tonKho?: TonKhoOrderByRelationAggregateInput
  }

  export type KhoHangWhereUniqueInput = Prisma.AtLeast<{
    maKho?: string
    AND?: KhoHangWhereInput | KhoHangWhereInput[]
    OR?: KhoHangWhereInput[]
    NOT?: KhoHangWhereInput | KhoHangWhereInput[]
    tenKho?: StringFilter<"KhoHang"> | string
    diaChi?: StringFilter<"KhoHang"> | string
    sdt?: StringNullableFilter<"KhoHang"> | string | null
    giaoDichKho?: GiaoDichKhoListRelationFilter
    tonKho?: TonKhoListRelationFilter
  }, "maKho">

  export type KhoHangOrderByWithAggregationInput = {
    maKho?: SortOrder
    tenKho?: SortOrder
    diaChi?: SortOrder
    sdt?: SortOrderInput | SortOrder
    _count?: KhoHangCountOrderByAggregateInput
    _max?: KhoHangMaxOrderByAggregateInput
    _min?: KhoHangMinOrderByAggregateInput
  }

  export type KhoHangScalarWhereWithAggregatesInput = {
    AND?: KhoHangScalarWhereWithAggregatesInput | KhoHangScalarWhereWithAggregatesInput[]
    OR?: KhoHangScalarWhereWithAggregatesInput[]
    NOT?: KhoHangScalarWhereWithAggregatesInput | KhoHangScalarWhereWithAggregatesInput[]
    maKho?: StringWithAggregatesFilter<"KhoHang"> | string
    tenKho?: StringWithAggregatesFilter<"KhoHang"> | string
    diaChi?: StringWithAggregatesFilter<"KhoHang"> | string
    sdt?: StringNullableWithAggregatesFilter<"KhoHang"> | string | null
  }

  export type SachWhereInput = {
    AND?: SachWhereInput | SachWhereInput[]
    OR?: SachWhereInput[]
    NOT?: SachWhereInput | SachWhereInput[]
    maSach?: StringFilter<"Sach"> | string
    tenSach?: StringFilter<"Sach"> | string
    tacGia?: StringFilter<"Sach"> | string
    nxb?: StringFilter<"Sach"> | string
    giaNhap?: DecimalFilter<"Sach"> | Decimal | DecimalJsLike | number | string
    giaSach?: DecimalFilter<"Sach"> | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiSachFilter<"Sach"> | $Enums.TrangThaiSach
    anhBia?: StringNullableFilter<"Sach"> | string | null
    giaoDichKho?: GiaoDichKhoListRelationFilter
    tonKho?: TonKhoListRelationFilter
    chiTietDonHang?: ChiTietDonHangListRelationFilter
  }

  export type SachOrderByWithRelationInput = {
    maSach?: SortOrder
    tenSach?: SortOrder
    tacGia?: SortOrder
    nxb?: SortOrder
    giaNhap?: SortOrder
    giaSach?: SortOrder
    trangThai?: SortOrder
    anhBia?: SortOrderInput | SortOrder
    giaoDichKho?: GiaoDichKhoOrderByRelationAggregateInput
    tonKho?: TonKhoOrderByRelationAggregateInput
    chiTietDonHang?: ChiTietDonHangOrderByRelationAggregateInput
  }

  export type SachWhereUniqueInput = Prisma.AtLeast<{
    maSach?: string
    AND?: SachWhereInput | SachWhereInput[]
    OR?: SachWhereInput[]
    NOT?: SachWhereInput | SachWhereInput[]
    tenSach?: StringFilter<"Sach"> | string
    tacGia?: StringFilter<"Sach"> | string
    nxb?: StringFilter<"Sach"> | string
    giaNhap?: DecimalFilter<"Sach"> | Decimal | DecimalJsLike | number | string
    giaSach?: DecimalFilter<"Sach"> | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiSachFilter<"Sach"> | $Enums.TrangThaiSach
    anhBia?: StringNullableFilter<"Sach"> | string | null
    giaoDichKho?: GiaoDichKhoListRelationFilter
    tonKho?: TonKhoListRelationFilter
    chiTietDonHang?: ChiTietDonHangListRelationFilter
  }, "maSach">

  export type SachOrderByWithAggregationInput = {
    maSach?: SortOrder
    tenSach?: SortOrder
    tacGia?: SortOrder
    nxb?: SortOrder
    giaNhap?: SortOrder
    giaSach?: SortOrder
    trangThai?: SortOrder
    anhBia?: SortOrderInput | SortOrder
    _count?: SachCountOrderByAggregateInput
    _avg?: SachAvgOrderByAggregateInput
    _max?: SachMaxOrderByAggregateInput
    _min?: SachMinOrderByAggregateInput
    _sum?: SachSumOrderByAggregateInput
  }

  export type SachScalarWhereWithAggregatesInput = {
    AND?: SachScalarWhereWithAggregatesInput | SachScalarWhereWithAggregatesInput[]
    OR?: SachScalarWhereWithAggregatesInput[]
    NOT?: SachScalarWhereWithAggregatesInput | SachScalarWhereWithAggregatesInput[]
    maSach?: StringWithAggregatesFilter<"Sach"> | string
    tenSach?: StringWithAggregatesFilter<"Sach"> | string
    tacGia?: StringWithAggregatesFilter<"Sach"> | string
    nxb?: StringWithAggregatesFilter<"Sach"> | string
    giaNhap?: DecimalWithAggregatesFilter<"Sach"> | Decimal | DecimalJsLike | number | string
    giaSach?: DecimalWithAggregatesFilter<"Sach"> | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiSachWithAggregatesFilter<"Sach"> | $Enums.TrangThaiSach
    anhBia?: StringNullableWithAggregatesFilter<"Sach"> | string | null
  }

  export type GiaoDichKhoWhereInput = {
    AND?: GiaoDichKhoWhereInput | GiaoDichKhoWhereInput[]
    OR?: GiaoDichKhoWhereInput[]
    NOT?: GiaoDichKhoWhereInput | GiaoDichKhoWhereInput[]
    maGD?: StringFilter<"GiaoDichKho"> | string
    maKho?: StringFilter<"GiaoDichKho"> | string
    maSach?: StringFilter<"GiaoDichKho"> | string
    maNV?: StringFilter<"GiaoDichKho"> | string
    loaiGD?: EnumLoaiGiaoDichFilter<"GiaoDichKho"> | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFilter<"GiaoDichKho"> | Date | string
    soLuong?: IntFilter<"GiaoDichKho"> | number
    ghiChu?: StringNullableFilter<"GiaoDichKho"> | string | null
    khoHang?: XOR<KhoHangScalarRelationFilter, KhoHangWhereInput>
    sach?: XOR<SachScalarRelationFilter, SachWhereInput>
    nhanVien?: XOR<NhanVienScalarRelationFilter, NhanVienWhereInput>
  }

  export type GiaoDichKhoOrderByWithRelationInput = {
    maGD?: SortOrder
    maKho?: SortOrder
    maSach?: SortOrder
    maNV?: SortOrder
    loaiGD?: SortOrder
    thoiGian?: SortOrder
    soLuong?: SortOrder
    ghiChu?: SortOrderInput | SortOrder
    khoHang?: KhoHangOrderByWithRelationInput
    sach?: SachOrderByWithRelationInput
    nhanVien?: NhanVienOrderByWithRelationInput
  }

  export type GiaoDichKhoWhereUniqueInput = Prisma.AtLeast<{
    maGD?: string
    AND?: GiaoDichKhoWhereInput | GiaoDichKhoWhereInput[]
    OR?: GiaoDichKhoWhereInput[]
    NOT?: GiaoDichKhoWhereInput | GiaoDichKhoWhereInput[]
    maKho?: StringFilter<"GiaoDichKho"> | string
    maSach?: StringFilter<"GiaoDichKho"> | string
    maNV?: StringFilter<"GiaoDichKho"> | string
    loaiGD?: EnumLoaiGiaoDichFilter<"GiaoDichKho"> | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFilter<"GiaoDichKho"> | Date | string
    soLuong?: IntFilter<"GiaoDichKho"> | number
    ghiChu?: StringNullableFilter<"GiaoDichKho"> | string | null
    khoHang?: XOR<KhoHangScalarRelationFilter, KhoHangWhereInput>
    sach?: XOR<SachScalarRelationFilter, SachWhereInput>
    nhanVien?: XOR<NhanVienScalarRelationFilter, NhanVienWhereInput>
  }, "maGD">

  export type GiaoDichKhoOrderByWithAggregationInput = {
    maGD?: SortOrder
    maKho?: SortOrder
    maSach?: SortOrder
    maNV?: SortOrder
    loaiGD?: SortOrder
    thoiGian?: SortOrder
    soLuong?: SortOrder
    ghiChu?: SortOrderInput | SortOrder
    _count?: GiaoDichKhoCountOrderByAggregateInput
    _avg?: GiaoDichKhoAvgOrderByAggregateInput
    _max?: GiaoDichKhoMaxOrderByAggregateInput
    _min?: GiaoDichKhoMinOrderByAggregateInput
    _sum?: GiaoDichKhoSumOrderByAggregateInput
  }

  export type GiaoDichKhoScalarWhereWithAggregatesInput = {
    AND?: GiaoDichKhoScalarWhereWithAggregatesInput | GiaoDichKhoScalarWhereWithAggregatesInput[]
    OR?: GiaoDichKhoScalarWhereWithAggregatesInput[]
    NOT?: GiaoDichKhoScalarWhereWithAggregatesInput | GiaoDichKhoScalarWhereWithAggregatesInput[]
    maGD?: StringWithAggregatesFilter<"GiaoDichKho"> | string
    maKho?: StringWithAggregatesFilter<"GiaoDichKho"> | string
    maSach?: StringWithAggregatesFilter<"GiaoDichKho"> | string
    maNV?: StringWithAggregatesFilter<"GiaoDichKho"> | string
    loaiGD?: EnumLoaiGiaoDichWithAggregatesFilter<"GiaoDichKho"> | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeWithAggregatesFilter<"GiaoDichKho"> | Date | string
    soLuong?: IntWithAggregatesFilter<"GiaoDichKho"> | number
    ghiChu?: StringNullableWithAggregatesFilter<"GiaoDichKho"> | string | null
  }

  export type TonKhoWhereInput = {
    AND?: TonKhoWhereInput | TonKhoWhereInput[]
    OR?: TonKhoWhereInput[]
    NOT?: TonKhoWhereInput | TonKhoWhereInput[]
    maKho?: StringFilter<"TonKho"> | string
    maSach?: StringFilter<"TonKho"> | string
    soLuong?: IntFilter<"TonKho"> | number
    viTriKe?: StringNullableFilter<"TonKho"> | string | null
    nguongMin?: IntFilter<"TonKho"> | number
    nguongMax?: IntFilter<"TonKho"> | number
    khoHang?: XOR<KhoHangScalarRelationFilter, KhoHangWhereInput>
    sach?: XOR<SachScalarRelationFilter, SachWhereInput>
  }

  export type TonKhoOrderByWithRelationInput = {
    maKho?: SortOrder
    maSach?: SortOrder
    soLuong?: SortOrder
    viTriKe?: SortOrderInput | SortOrder
    nguongMin?: SortOrder
    nguongMax?: SortOrder
    khoHang?: KhoHangOrderByWithRelationInput
    sach?: SachOrderByWithRelationInput
  }

  export type TonKhoWhereUniqueInput = Prisma.AtLeast<{
    maKho_maSach?: TonKhoMaKhoMaSachCompoundUniqueInput
    AND?: TonKhoWhereInput | TonKhoWhereInput[]
    OR?: TonKhoWhereInput[]
    NOT?: TonKhoWhereInput | TonKhoWhereInput[]
    maKho?: StringFilter<"TonKho"> | string
    maSach?: StringFilter<"TonKho"> | string
    soLuong?: IntFilter<"TonKho"> | number
    viTriKe?: StringNullableFilter<"TonKho"> | string | null
    nguongMin?: IntFilter<"TonKho"> | number
    nguongMax?: IntFilter<"TonKho"> | number
    khoHang?: XOR<KhoHangScalarRelationFilter, KhoHangWhereInput>
    sach?: XOR<SachScalarRelationFilter, SachWhereInput>
  }, "maKho_maSach">

  export type TonKhoOrderByWithAggregationInput = {
    maKho?: SortOrder
    maSach?: SortOrder
    soLuong?: SortOrder
    viTriKe?: SortOrderInput | SortOrder
    nguongMin?: SortOrder
    nguongMax?: SortOrder
    _count?: TonKhoCountOrderByAggregateInput
    _avg?: TonKhoAvgOrderByAggregateInput
    _max?: TonKhoMaxOrderByAggregateInput
    _min?: TonKhoMinOrderByAggregateInput
    _sum?: TonKhoSumOrderByAggregateInput
  }

  export type TonKhoScalarWhereWithAggregatesInput = {
    AND?: TonKhoScalarWhereWithAggregatesInput | TonKhoScalarWhereWithAggregatesInput[]
    OR?: TonKhoScalarWhereWithAggregatesInput[]
    NOT?: TonKhoScalarWhereWithAggregatesInput | TonKhoScalarWhereWithAggregatesInput[]
    maKho?: StringWithAggregatesFilter<"TonKho"> | string
    maSach?: StringWithAggregatesFilter<"TonKho"> | string
    soLuong?: IntWithAggregatesFilter<"TonKho"> | number
    viTriKe?: StringNullableWithAggregatesFilter<"TonKho"> | string | null
    nguongMin?: IntWithAggregatesFilter<"TonKho"> | number
    nguongMax?: IntWithAggregatesFilter<"TonKho"> | number
  }

  export type DonHangWhereInput = {
    AND?: DonHangWhereInput | DonHangWhereInput[]
    OR?: DonHangWhereInput[]
    NOT?: DonHangWhereInput | DonHangWhereInput[]
    maDH?: StringFilter<"DonHang"> | string
    maNV?: StringFilter<"DonHang"> | string
    ngayTao?: DateTimeFilter<"DonHang"> | Date | string
    tongTien?: DecimalFilter<"DonHang"> | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiDonHangFilter<"DonHang"> | $Enums.TrangThaiDonHang
    nhanVien?: XOR<NhanVienScalarRelationFilter, NhanVienWhereInput>
    chiTiet?: ChiTietDonHangListRelationFilter
  }

  export type DonHangOrderByWithRelationInput = {
    maDH?: SortOrder
    maNV?: SortOrder
    ngayTao?: SortOrder
    tongTien?: SortOrder
    trangThai?: SortOrder
    nhanVien?: NhanVienOrderByWithRelationInput
    chiTiet?: ChiTietDonHangOrderByRelationAggregateInput
  }

  export type DonHangWhereUniqueInput = Prisma.AtLeast<{
    maDH?: string
    AND?: DonHangWhereInput | DonHangWhereInput[]
    OR?: DonHangWhereInput[]
    NOT?: DonHangWhereInput | DonHangWhereInput[]
    maNV?: StringFilter<"DonHang"> | string
    ngayTao?: DateTimeFilter<"DonHang"> | Date | string
    tongTien?: DecimalFilter<"DonHang"> | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiDonHangFilter<"DonHang"> | $Enums.TrangThaiDonHang
    nhanVien?: XOR<NhanVienScalarRelationFilter, NhanVienWhereInput>
    chiTiet?: ChiTietDonHangListRelationFilter
  }, "maDH">

  export type DonHangOrderByWithAggregationInput = {
    maDH?: SortOrder
    maNV?: SortOrder
    ngayTao?: SortOrder
    tongTien?: SortOrder
    trangThai?: SortOrder
    _count?: DonHangCountOrderByAggregateInput
    _avg?: DonHangAvgOrderByAggregateInput
    _max?: DonHangMaxOrderByAggregateInput
    _min?: DonHangMinOrderByAggregateInput
    _sum?: DonHangSumOrderByAggregateInput
  }

  export type DonHangScalarWhereWithAggregatesInput = {
    AND?: DonHangScalarWhereWithAggregatesInput | DonHangScalarWhereWithAggregatesInput[]
    OR?: DonHangScalarWhereWithAggregatesInput[]
    NOT?: DonHangScalarWhereWithAggregatesInput | DonHangScalarWhereWithAggregatesInput[]
    maDH?: StringWithAggregatesFilter<"DonHang"> | string
    maNV?: StringWithAggregatesFilter<"DonHang"> | string
    ngayTao?: DateTimeWithAggregatesFilter<"DonHang"> | Date | string
    tongTien?: DecimalWithAggregatesFilter<"DonHang"> | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiDonHangWithAggregatesFilter<"DonHang"> | $Enums.TrangThaiDonHang
  }

  export type ChiTietDonHangWhereInput = {
    AND?: ChiTietDonHangWhereInput | ChiTietDonHangWhereInput[]
    OR?: ChiTietDonHangWhereInput[]
    NOT?: ChiTietDonHangWhereInput | ChiTietDonHangWhereInput[]
    maDH?: StringFilter<"ChiTietDonHang"> | string
    maSach?: StringFilter<"ChiTietDonHang"> | string
    soLuong?: IntFilter<"ChiTietDonHang"> | number
    donGia?: DecimalFilter<"ChiTietDonHang"> | Decimal | DecimalJsLike | number | string
    donHang?: XOR<DonHangScalarRelationFilter, DonHangWhereInput>
    sach?: XOR<SachScalarRelationFilter, SachWhereInput>
  }

  export type ChiTietDonHangOrderByWithRelationInput = {
    maDH?: SortOrder
    maSach?: SortOrder
    soLuong?: SortOrder
    donGia?: SortOrder
    donHang?: DonHangOrderByWithRelationInput
    sach?: SachOrderByWithRelationInput
  }

  export type ChiTietDonHangWhereUniqueInput = Prisma.AtLeast<{
    maDH_maSach?: ChiTietDonHangMaDHMaSachCompoundUniqueInput
    AND?: ChiTietDonHangWhereInput | ChiTietDonHangWhereInput[]
    OR?: ChiTietDonHangWhereInput[]
    NOT?: ChiTietDonHangWhereInput | ChiTietDonHangWhereInput[]
    maDH?: StringFilter<"ChiTietDonHang"> | string
    maSach?: StringFilter<"ChiTietDonHang"> | string
    soLuong?: IntFilter<"ChiTietDonHang"> | number
    donGia?: DecimalFilter<"ChiTietDonHang"> | Decimal | DecimalJsLike | number | string
    donHang?: XOR<DonHangScalarRelationFilter, DonHangWhereInput>
    sach?: XOR<SachScalarRelationFilter, SachWhereInput>
  }, "maDH_maSach">

  export type ChiTietDonHangOrderByWithAggregationInput = {
    maDH?: SortOrder
    maSach?: SortOrder
    soLuong?: SortOrder
    donGia?: SortOrder
    _count?: ChiTietDonHangCountOrderByAggregateInput
    _avg?: ChiTietDonHangAvgOrderByAggregateInput
    _max?: ChiTietDonHangMaxOrderByAggregateInput
    _min?: ChiTietDonHangMinOrderByAggregateInput
    _sum?: ChiTietDonHangSumOrderByAggregateInput
  }

  export type ChiTietDonHangScalarWhereWithAggregatesInput = {
    AND?: ChiTietDonHangScalarWhereWithAggregatesInput | ChiTietDonHangScalarWhereWithAggregatesInput[]
    OR?: ChiTietDonHangScalarWhereWithAggregatesInput[]
    NOT?: ChiTietDonHangScalarWhereWithAggregatesInput | ChiTietDonHangScalarWhereWithAggregatesInput[]
    maDH?: StringWithAggregatesFilter<"ChiTietDonHang"> | string
    maSach?: StringWithAggregatesFilter<"ChiTietDonHang"> | string
    soLuong?: IntWithAggregatesFilter<"ChiTietDonHang"> | number
    donGia?: DecimalWithAggregatesFilter<"ChiTietDonHang"> | Decimal | DecimalJsLike | number | string
  }

  export type NhanVienCreateInput = {
    maNV?: string
    matKhau: string
    hoTen: string
    chucVu: $Enums.ChucVu
    giaoDichKho?: GiaoDichKhoCreateNestedManyWithoutNhanVienInput
    donHang?: DonHangCreateNestedManyWithoutNhanVienInput
  }

  export type NhanVienUncheckedCreateInput = {
    maNV?: string
    matKhau: string
    hoTen: string
    chucVu: $Enums.ChucVu
    giaoDichKho?: GiaoDichKhoUncheckedCreateNestedManyWithoutNhanVienInput
    donHang?: DonHangUncheckedCreateNestedManyWithoutNhanVienInput
  }

  export type NhanVienUpdateInput = {
    maNV?: StringFieldUpdateOperationsInput | string
    matKhau?: StringFieldUpdateOperationsInput | string
    hoTen?: StringFieldUpdateOperationsInput | string
    chucVu?: EnumChucVuFieldUpdateOperationsInput | $Enums.ChucVu
    giaoDichKho?: GiaoDichKhoUpdateManyWithoutNhanVienNestedInput
    donHang?: DonHangUpdateManyWithoutNhanVienNestedInput
  }

  export type NhanVienUncheckedUpdateInput = {
    maNV?: StringFieldUpdateOperationsInput | string
    matKhau?: StringFieldUpdateOperationsInput | string
    hoTen?: StringFieldUpdateOperationsInput | string
    chucVu?: EnumChucVuFieldUpdateOperationsInput | $Enums.ChucVu
    giaoDichKho?: GiaoDichKhoUncheckedUpdateManyWithoutNhanVienNestedInput
    donHang?: DonHangUncheckedUpdateManyWithoutNhanVienNestedInput
  }

  export type NhanVienCreateManyInput = {
    maNV?: string
    matKhau: string
    hoTen: string
    chucVu: $Enums.ChucVu
  }

  export type NhanVienUpdateManyMutationInput = {
    maNV?: StringFieldUpdateOperationsInput | string
    matKhau?: StringFieldUpdateOperationsInput | string
    hoTen?: StringFieldUpdateOperationsInput | string
    chucVu?: EnumChucVuFieldUpdateOperationsInput | $Enums.ChucVu
  }

  export type NhanVienUncheckedUpdateManyInput = {
    maNV?: StringFieldUpdateOperationsInput | string
    matKhau?: StringFieldUpdateOperationsInput | string
    hoTen?: StringFieldUpdateOperationsInput | string
    chucVu?: EnumChucVuFieldUpdateOperationsInput | $Enums.ChucVu
  }

  export type KhoHangCreateInput = {
    maKho?: string
    tenKho: string
    diaChi: string
    sdt?: string | null
    giaoDichKho?: GiaoDichKhoCreateNestedManyWithoutKhoHangInput
    tonKho?: TonKhoCreateNestedManyWithoutKhoHangInput
  }

  export type KhoHangUncheckedCreateInput = {
    maKho?: string
    tenKho: string
    diaChi: string
    sdt?: string | null
    giaoDichKho?: GiaoDichKhoUncheckedCreateNestedManyWithoutKhoHangInput
    tonKho?: TonKhoUncheckedCreateNestedManyWithoutKhoHangInput
  }

  export type KhoHangUpdateInput = {
    maKho?: StringFieldUpdateOperationsInput | string
    tenKho?: StringFieldUpdateOperationsInput | string
    diaChi?: StringFieldUpdateOperationsInput | string
    sdt?: NullableStringFieldUpdateOperationsInput | string | null
    giaoDichKho?: GiaoDichKhoUpdateManyWithoutKhoHangNestedInput
    tonKho?: TonKhoUpdateManyWithoutKhoHangNestedInput
  }

  export type KhoHangUncheckedUpdateInput = {
    maKho?: StringFieldUpdateOperationsInput | string
    tenKho?: StringFieldUpdateOperationsInput | string
    diaChi?: StringFieldUpdateOperationsInput | string
    sdt?: NullableStringFieldUpdateOperationsInput | string | null
    giaoDichKho?: GiaoDichKhoUncheckedUpdateManyWithoutKhoHangNestedInput
    tonKho?: TonKhoUncheckedUpdateManyWithoutKhoHangNestedInput
  }

  export type KhoHangCreateManyInput = {
    maKho?: string
    tenKho: string
    diaChi: string
    sdt?: string | null
  }

  export type KhoHangUpdateManyMutationInput = {
    maKho?: StringFieldUpdateOperationsInput | string
    tenKho?: StringFieldUpdateOperationsInput | string
    diaChi?: StringFieldUpdateOperationsInput | string
    sdt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KhoHangUncheckedUpdateManyInput = {
    maKho?: StringFieldUpdateOperationsInput | string
    tenKho?: StringFieldUpdateOperationsInput | string
    diaChi?: StringFieldUpdateOperationsInput | string
    sdt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SachCreateInput = {
    maSach?: string
    tenSach: string
    tacGia: string
    nxb: string
    giaNhap: Decimal | DecimalJsLike | number | string
    giaSach: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiSach
    anhBia?: string | null
    giaoDichKho?: GiaoDichKhoCreateNestedManyWithoutSachInput
    tonKho?: TonKhoCreateNestedManyWithoutSachInput
    chiTietDonHang?: ChiTietDonHangCreateNestedManyWithoutSachInput
  }

  export type SachUncheckedCreateInput = {
    maSach?: string
    tenSach: string
    tacGia: string
    nxb: string
    giaNhap: Decimal | DecimalJsLike | number | string
    giaSach: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiSach
    anhBia?: string | null
    giaoDichKho?: GiaoDichKhoUncheckedCreateNestedManyWithoutSachInput
    tonKho?: TonKhoUncheckedCreateNestedManyWithoutSachInput
    chiTietDonHang?: ChiTietDonHangUncheckedCreateNestedManyWithoutSachInput
  }

  export type SachUpdateInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    tenSach?: StringFieldUpdateOperationsInput | string
    tacGia?: StringFieldUpdateOperationsInput | string
    nxb?: StringFieldUpdateOperationsInput | string
    giaNhap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    giaSach?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiSachFieldUpdateOperationsInput | $Enums.TrangThaiSach
    anhBia?: NullableStringFieldUpdateOperationsInput | string | null
    giaoDichKho?: GiaoDichKhoUpdateManyWithoutSachNestedInput
    tonKho?: TonKhoUpdateManyWithoutSachNestedInput
    chiTietDonHang?: ChiTietDonHangUpdateManyWithoutSachNestedInput
  }

  export type SachUncheckedUpdateInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    tenSach?: StringFieldUpdateOperationsInput | string
    tacGia?: StringFieldUpdateOperationsInput | string
    nxb?: StringFieldUpdateOperationsInput | string
    giaNhap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    giaSach?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiSachFieldUpdateOperationsInput | $Enums.TrangThaiSach
    anhBia?: NullableStringFieldUpdateOperationsInput | string | null
    giaoDichKho?: GiaoDichKhoUncheckedUpdateManyWithoutSachNestedInput
    tonKho?: TonKhoUncheckedUpdateManyWithoutSachNestedInput
    chiTietDonHang?: ChiTietDonHangUncheckedUpdateManyWithoutSachNestedInput
  }

  export type SachCreateManyInput = {
    maSach?: string
    tenSach: string
    tacGia: string
    nxb: string
    giaNhap: Decimal | DecimalJsLike | number | string
    giaSach: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiSach
    anhBia?: string | null
  }

  export type SachUpdateManyMutationInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    tenSach?: StringFieldUpdateOperationsInput | string
    tacGia?: StringFieldUpdateOperationsInput | string
    nxb?: StringFieldUpdateOperationsInput | string
    giaNhap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    giaSach?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiSachFieldUpdateOperationsInput | $Enums.TrangThaiSach
    anhBia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SachUncheckedUpdateManyInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    tenSach?: StringFieldUpdateOperationsInput | string
    tacGia?: StringFieldUpdateOperationsInput | string
    nxb?: StringFieldUpdateOperationsInput | string
    giaNhap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    giaSach?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiSachFieldUpdateOperationsInput | $Enums.TrangThaiSach
    anhBia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GiaoDichKhoCreateInput = {
    maGD?: string
    loaiGD: $Enums.LoaiGiaoDich
    thoiGian?: Date | string
    soLuong: number
    ghiChu?: string | null
    khoHang: KhoHangCreateNestedOneWithoutGiaoDichKhoInput
    sach: SachCreateNestedOneWithoutGiaoDichKhoInput
    nhanVien: NhanVienCreateNestedOneWithoutGiaoDichKhoInput
  }

  export type GiaoDichKhoUncheckedCreateInput = {
    maGD?: string
    maKho: string
    maSach: string
    maNV: string
    loaiGD: $Enums.LoaiGiaoDich
    thoiGian?: Date | string
    soLuong: number
    ghiChu?: string | null
  }

  export type GiaoDichKhoUpdateInput = {
    maGD?: StringFieldUpdateOperationsInput | string
    loaiGD?: EnumLoaiGiaoDichFieldUpdateOperationsInput | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFieldUpdateOperationsInput | Date | string
    soLuong?: IntFieldUpdateOperationsInput | number
    ghiChu?: NullableStringFieldUpdateOperationsInput | string | null
    khoHang?: KhoHangUpdateOneRequiredWithoutGiaoDichKhoNestedInput
    sach?: SachUpdateOneRequiredWithoutGiaoDichKhoNestedInput
    nhanVien?: NhanVienUpdateOneRequiredWithoutGiaoDichKhoNestedInput
  }

  export type GiaoDichKhoUncheckedUpdateInput = {
    maGD?: StringFieldUpdateOperationsInput | string
    maKho?: StringFieldUpdateOperationsInput | string
    maSach?: StringFieldUpdateOperationsInput | string
    maNV?: StringFieldUpdateOperationsInput | string
    loaiGD?: EnumLoaiGiaoDichFieldUpdateOperationsInput | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFieldUpdateOperationsInput | Date | string
    soLuong?: IntFieldUpdateOperationsInput | number
    ghiChu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GiaoDichKhoCreateManyInput = {
    maGD?: string
    maKho: string
    maSach: string
    maNV: string
    loaiGD: $Enums.LoaiGiaoDich
    thoiGian?: Date | string
    soLuong: number
    ghiChu?: string | null
  }

  export type GiaoDichKhoUpdateManyMutationInput = {
    maGD?: StringFieldUpdateOperationsInput | string
    loaiGD?: EnumLoaiGiaoDichFieldUpdateOperationsInput | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFieldUpdateOperationsInput | Date | string
    soLuong?: IntFieldUpdateOperationsInput | number
    ghiChu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GiaoDichKhoUncheckedUpdateManyInput = {
    maGD?: StringFieldUpdateOperationsInput | string
    maKho?: StringFieldUpdateOperationsInput | string
    maSach?: StringFieldUpdateOperationsInput | string
    maNV?: StringFieldUpdateOperationsInput | string
    loaiGD?: EnumLoaiGiaoDichFieldUpdateOperationsInput | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFieldUpdateOperationsInput | Date | string
    soLuong?: IntFieldUpdateOperationsInput | number
    ghiChu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TonKhoCreateInput = {
    soLuong?: number
    viTriKe?: string | null
    nguongMin?: number
    nguongMax?: number
    khoHang: KhoHangCreateNestedOneWithoutTonKhoInput
    sach: SachCreateNestedOneWithoutTonKhoInput
  }

  export type TonKhoUncheckedCreateInput = {
    maKho: string
    maSach: string
    soLuong?: number
    viTriKe?: string | null
    nguongMin?: number
    nguongMax?: number
  }

  export type TonKhoUpdateInput = {
    soLuong?: IntFieldUpdateOperationsInput | number
    viTriKe?: NullableStringFieldUpdateOperationsInput | string | null
    nguongMin?: IntFieldUpdateOperationsInput | number
    nguongMax?: IntFieldUpdateOperationsInput | number
    khoHang?: KhoHangUpdateOneRequiredWithoutTonKhoNestedInput
    sach?: SachUpdateOneRequiredWithoutTonKhoNestedInput
  }

  export type TonKhoUncheckedUpdateInput = {
    maKho?: StringFieldUpdateOperationsInput | string
    maSach?: StringFieldUpdateOperationsInput | string
    soLuong?: IntFieldUpdateOperationsInput | number
    viTriKe?: NullableStringFieldUpdateOperationsInput | string | null
    nguongMin?: IntFieldUpdateOperationsInput | number
    nguongMax?: IntFieldUpdateOperationsInput | number
  }

  export type TonKhoCreateManyInput = {
    maKho: string
    maSach: string
    soLuong?: number
    viTriKe?: string | null
    nguongMin?: number
    nguongMax?: number
  }

  export type TonKhoUpdateManyMutationInput = {
    soLuong?: IntFieldUpdateOperationsInput | number
    viTriKe?: NullableStringFieldUpdateOperationsInput | string | null
    nguongMin?: IntFieldUpdateOperationsInput | number
    nguongMax?: IntFieldUpdateOperationsInput | number
  }

  export type TonKhoUncheckedUpdateManyInput = {
    maKho?: StringFieldUpdateOperationsInput | string
    maSach?: StringFieldUpdateOperationsInput | string
    soLuong?: IntFieldUpdateOperationsInput | number
    viTriKe?: NullableStringFieldUpdateOperationsInput | string | null
    nguongMin?: IntFieldUpdateOperationsInput | number
    nguongMax?: IntFieldUpdateOperationsInput | number
  }

  export type DonHangCreateInput = {
    maDH?: string
    ngayTao?: Date | string
    tongTien?: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiDonHang
    nhanVien: NhanVienCreateNestedOneWithoutDonHangInput
    chiTiet?: ChiTietDonHangCreateNestedManyWithoutDonHangInput
  }

  export type DonHangUncheckedCreateInput = {
    maDH?: string
    maNV: string
    ngayTao?: Date | string
    tongTien?: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiDonHang
    chiTiet?: ChiTietDonHangUncheckedCreateNestedManyWithoutDonHangInput
  }

  export type DonHangUpdateInput = {
    maDH?: StringFieldUpdateOperationsInput | string
    ngayTao?: DateTimeFieldUpdateOperationsInput | Date | string
    tongTien?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiDonHangFieldUpdateOperationsInput | $Enums.TrangThaiDonHang
    nhanVien?: NhanVienUpdateOneRequiredWithoutDonHangNestedInput
    chiTiet?: ChiTietDonHangUpdateManyWithoutDonHangNestedInput
  }

  export type DonHangUncheckedUpdateInput = {
    maDH?: StringFieldUpdateOperationsInput | string
    maNV?: StringFieldUpdateOperationsInput | string
    ngayTao?: DateTimeFieldUpdateOperationsInput | Date | string
    tongTien?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiDonHangFieldUpdateOperationsInput | $Enums.TrangThaiDonHang
    chiTiet?: ChiTietDonHangUncheckedUpdateManyWithoutDonHangNestedInput
  }

  export type DonHangCreateManyInput = {
    maDH?: string
    maNV: string
    ngayTao?: Date | string
    tongTien?: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiDonHang
  }

  export type DonHangUpdateManyMutationInput = {
    maDH?: StringFieldUpdateOperationsInput | string
    ngayTao?: DateTimeFieldUpdateOperationsInput | Date | string
    tongTien?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiDonHangFieldUpdateOperationsInput | $Enums.TrangThaiDonHang
  }

  export type DonHangUncheckedUpdateManyInput = {
    maDH?: StringFieldUpdateOperationsInput | string
    maNV?: StringFieldUpdateOperationsInput | string
    ngayTao?: DateTimeFieldUpdateOperationsInput | Date | string
    tongTien?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiDonHangFieldUpdateOperationsInput | $Enums.TrangThaiDonHang
  }

  export type ChiTietDonHangCreateInput = {
    soLuong: number
    donGia: Decimal | DecimalJsLike | number | string
    donHang: DonHangCreateNestedOneWithoutChiTietInput
    sach: SachCreateNestedOneWithoutChiTietDonHangInput
  }

  export type ChiTietDonHangUncheckedCreateInput = {
    maDH: string
    maSach: string
    soLuong: number
    donGia: Decimal | DecimalJsLike | number | string
  }

  export type ChiTietDonHangUpdateInput = {
    soLuong?: IntFieldUpdateOperationsInput | number
    donGia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donHang?: DonHangUpdateOneRequiredWithoutChiTietNestedInput
    sach?: SachUpdateOneRequiredWithoutChiTietDonHangNestedInput
  }

  export type ChiTietDonHangUncheckedUpdateInput = {
    maDH?: StringFieldUpdateOperationsInput | string
    maSach?: StringFieldUpdateOperationsInput | string
    soLuong?: IntFieldUpdateOperationsInput | number
    donGia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ChiTietDonHangCreateManyInput = {
    maDH: string
    maSach: string
    soLuong: number
    donGia: Decimal | DecimalJsLike | number | string
  }

  export type ChiTietDonHangUpdateManyMutationInput = {
    soLuong?: IntFieldUpdateOperationsInput | number
    donGia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ChiTietDonHangUncheckedUpdateManyInput = {
    maDH?: StringFieldUpdateOperationsInput | string
    maSach?: StringFieldUpdateOperationsInput | string
    soLuong?: IntFieldUpdateOperationsInput | number
    donGia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumChucVuFilter<$PrismaModel = never> = {
    equals?: $Enums.ChucVu | EnumChucVuFieldRefInput<$PrismaModel>
    in?: $Enums.ChucVu[] | ListEnumChucVuFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChucVu[] | ListEnumChucVuFieldRefInput<$PrismaModel>
    not?: NestedEnumChucVuFilter<$PrismaModel> | $Enums.ChucVu
  }

  export type GiaoDichKhoListRelationFilter = {
    every?: GiaoDichKhoWhereInput
    some?: GiaoDichKhoWhereInput
    none?: GiaoDichKhoWhereInput
  }

  export type DonHangListRelationFilter = {
    every?: DonHangWhereInput
    some?: DonHangWhereInput
    none?: DonHangWhereInput
  }

  export type GiaoDichKhoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonHangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NhanVienCountOrderByAggregateInput = {
    maNV?: SortOrder
    matKhau?: SortOrder
    hoTen?: SortOrder
    chucVu?: SortOrder
  }

  export type NhanVienMaxOrderByAggregateInput = {
    maNV?: SortOrder
    matKhau?: SortOrder
    hoTen?: SortOrder
    chucVu?: SortOrder
  }

  export type NhanVienMinOrderByAggregateInput = {
    maNV?: SortOrder
    matKhau?: SortOrder
    hoTen?: SortOrder
    chucVu?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumChucVuWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChucVu | EnumChucVuFieldRefInput<$PrismaModel>
    in?: $Enums.ChucVu[] | ListEnumChucVuFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChucVu[] | ListEnumChucVuFieldRefInput<$PrismaModel>
    not?: NestedEnumChucVuWithAggregatesFilter<$PrismaModel> | $Enums.ChucVu
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChucVuFilter<$PrismaModel>
    _max?: NestedEnumChucVuFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TonKhoListRelationFilter = {
    every?: TonKhoWhereInput
    some?: TonKhoWhereInput
    none?: TonKhoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TonKhoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KhoHangCountOrderByAggregateInput = {
    maKho?: SortOrder
    tenKho?: SortOrder
    diaChi?: SortOrder
    sdt?: SortOrder
  }

  export type KhoHangMaxOrderByAggregateInput = {
    maKho?: SortOrder
    tenKho?: SortOrder
    diaChi?: SortOrder
    sdt?: SortOrder
  }

  export type KhoHangMinOrderByAggregateInput = {
    maKho?: SortOrder
    tenKho?: SortOrder
    diaChi?: SortOrder
    sdt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumTrangThaiSachFilter<$PrismaModel = never> = {
    equals?: $Enums.TrangThaiSach | EnumTrangThaiSachFieldRefInput<$PrismaModel>
    in?: $Enums.TrangThaiSach[] | ListEnumTrangThaiSachFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrangThaiSach[] | ListEnumTrangThaiSachFieldRefInput<$PrismaModel>
    not?: NestedEnumTrangThaiSachFilter<$PrismaModel> | $Enums.TrangThaiSach
  }

  export type ChiTietDonHangListRelationFilter = {
    every?: ChiTietDonHangWhereInput
    some?: ChiTietDonHangWhereInput
    none?: ChiTietDonHangWhereInput
  }

  export type ChiTietDonHangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SachCountOrderByAggregateInput = {
    maSach?: SortOrder
    tenSach?: SortOrder
    tacGia?: SortOrder
    nxb?: SortOrder
    giaNhap?: SortOrder
    giaSach?: SortOrder
    trangThai?: SortOrder
    anhBia?: SortOrder
  }

  export type SachAvgOrderByAggregateInput = {
    giaNhap?: SortOrder
    giaSach?: SortOrder
  }

  export type SachMaxOrderByAggregateInput = {
    maSach?: SortOrder
    tenSach?: SortOrder
    tacGia?: SortOrder
    nxb?: SortOrder
    giaNhap?: SortOrder
    giaSach?: SortOrder
    trangThai?: SortOrder
    anhBia?: SortOrder
  }

  export type SachMinOrderByAggregateInput = {
    maSach?: SortOrder
    tenSach?: SortOrder
    tacGia?: SortOrder
    nxb?: SortOrder
    giaNhap?: SortOrder
    giaSach?: SortOrder
    trangThai?: SortOrder
    anhBia?: SortOrder
  }

  export type SachSumOrderByAggregateInput = {
    giaNhap?: SortOrder
    giaSach?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumTrangThaiSachWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrangThaiSach | EnumTrangThaiSachFieldRefInput<$PrismaModel>
    in?: $Enums.TrangThaiSach[] | ListEnumTrangThaiSachFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrangThaiSach[] | ListEnumTrangThaiSachFieldRefInput<$PrismaModel>
    not?: NestedEnumTrangThaiSachWithAggregatesFilter<$PrismaModel> | $Enums.TrangThaiSach
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrangThaiSachFilter<$PrismaModel>
    _max?: NestedEnumTrangThaiSachFilter<$PrismaModel>
  }

  export type EnumLoaiGiaoDichFilter<$PrismaModel = never> = {
    equals?: $Enums.LoaiGiaoDich | EnumLoaiGiaoDichFieldRefInput<$PrismaModel>
    in?: $Enums.LoaiGiaoDich[] | ListEnumLoaiGiaoDichFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoaiGiaoDich[] | ListEnumLoaiGiaoDichFieldRefInput<$PrismaModel>
    not?: NestedEnumLoaiGiaoDichFilter<$PrismaModel> | $Enums.LoaiGiaoDich
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type KhoHangScalarRelationFilter = {
    is?: KhoHangWhereInput
    isNot?: KhoHangWhereInput
  }

  export type SachScalarRelationFilter = {
    is?: SachWhereInput
    isNot?: SachWhereInput
  }

  export type NhanVienScalarRelationFilter = {
    is?: NhanVienWhereInput
    isNot?: NhanVienWhereInput
  }

  export type GiaoDichKhoCountOrderByAggregateInput = {
    maGD?: SortOrder
    maKho?: SortOrder
    maSach?: SortOrder
    maNV?: SortOrder
    loaiGD?: SortOrder
    thoiGian?: SortOrder
    soLuong?: SortOrder
    ghiChu?: SortOrder
  }

  export type GiaoDichKhoAvgOrderByAggregateInput = {
    soLuong?: SortOrder
  }

  export type GiaoDichKhoMaxOrderByAggregateInput = {
    maGD?: SortOrder
    maKho?: SortOrder
    maSach?: SortOrder
    maNV?: SortOrder
    loaiGD?: SortOrder
    thoiGian?: SortOrder
    soLuong?: SortOrder
    ghiChu?: SortOrder
  }

  export type GiaoDichKhoMinOrderByAggregateInput = {
    maGD?: SortOrder
    maKho?: SortOrder
    maSach?: SortOrder
    maNV?: SortOrder
    loaiGD?: SortOrder
    thoiGian?: SortOrder
    soLuong?: SortOrder
    ghiChu?: SortOrder
  }

  export type GiaoDichKhoSumOrderByAggregateInput = {
    soLuong?: SortOrder
  }

  export type EnumLoaiGiaoDichWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoaiGiaoDich | EnumLoaiGiaoDichFieldRefInput<$PrismaModel>
    in?: $Enums.LoaiGiaoDich[] | ListEnumLoaiGiaoDichFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoaiGiaoDich[] | ListEnumLoaiGiaoDichFieldRefInput<$PrismaModel>
    not?: NestedEnumLoaiGiaoDichWithAggregatesFilter<$PrismaModel> | $Enums.LoaiGiaoDich
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoaiGiaoDichFilter<$PrismaModel>
    _max?: NestedEnumLoaiGiaoDichFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TonKhoMaKhoMaSachCompoundUniqueInput = {
    maKho: string
    maSach: string
  }

  export type TonKhoCountOrderByAggregateInput = {
    maKho?: SortOrder
    maSach?: SortOrder
    soLuong?: SortOrder
    viTriKe?: SortOrder
    nguongMin?: SortOrder
    nguongMax?: SortOrder
  }

  export type TonKhoAvgOrderByAggregateInput = {
    soLuong?: SortOrder
    nguongMin?: SortOrder
    nguongMax?: SortOrder
  }

  export type TonKhoMaxOrderByAggregateInput = {
    maKho?: SortOrder
    maSach?: SortOrder
    soLuong?: SortOrder
    viTriKe?: SortOrder
    nguongMin?: SortOrder
    nguongMax?: SortOrder
  }

  export type TonKhoMinOrderByAggregateInput = {
    maKho?: SortOrder
    maSach?: SortOrder
    soLuong?: SortOrder
    viTriKe?: SortOrder
    nguongMin?: SortOrder
    nguongMax?: SortOrder
  }

  export type TonKhoSumOrderByAggregateInput = {
    soLuong?: SortOrder
    nguongMin?: SortOrder
    nguongMax?: SortOrder
  }

  export type EnumTrangThaiDonHangFilter<$PrismaModel = never> = {
    equals?: $Enums.TrangThaiDonHang | EnumTrangThaiDonHangFieldRefInput<$PrismaModel>
    in?: $Enums.TrangThaiDonHang[] | ListEnumTrangThaiDonHangFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrangThaiDonHang[] | ListEnumTrangThaiDonHangFieldRefInput<$PrismaModel>
    not?: NestedEnumTrangThaiDonHangFilter<$PrismaModel> | $Enums.TrangThaiDonHang
  }

  export type DonHangCountOrderByAggregateInput = {
    maDH?: SortOrder
    maNV?: SortOrder
    ngayTao?: SortOrder
    tongTien?: SortOrder
    trangThai?: SortOrder
  }

  export type DonHangAvgOrderByAggregateInput = {
    tongTien?: SortOrder
  }

  export type DonHangMaxOrderByAggregateInput = {
    maDH?: SortOrder
    maNV?: SortOrder
    ngayTao?: SortOrder
    tongTien?: SortOrder
    trangThai?: SortOrder
  }

  export type DonHangMinOrderByAggregateInput = {
    maDH?: SortOrder
    maNV?: SortOrder
    ngayTao?: SortOrder
    tongTien?: SortOrder
    trangThai?: SortOrder
  }

  export type DonHangSumOrderByAggregateInput = {
    tongTien?: SortOrder
  }

  export type EnumTrangThaiDonHangWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrangThaiDonHang | EnumTrangThaiDonHangFieldRefInput<$PrismaModel>
    in?: $Enums.TrangThaiDonHang[] | ListEnumTrangThaiDonHangFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrangThaiDonHang[] | ListEnumTrangThaiDonHangFieldRefInput<$PrismaModel>
    not?: NestedEnumTrangThaiDonHangWithAggregatesFilter<$PrismaModel> | $Enums.TrangThaiDonHang
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrangThaiDonHangFilter<$PrismaModel>
    _max?: NestedEnumTrangThaiDonHangFilter<$PrismaModel>
  }

  export type DonHangScalarRelationFilter = {
    is?: DonHangWhereInput
    isNot?: DonHangWhereInput
  }

  export type ChiTietDonHangMaDHMaSachCompoundUniqueInput = {
    maDH: string
    maSach: string
  }

  export type ChiTietDonHangCountOrderByAggregateInput = {
    maDH?: SortOrder
    maSach?: SortOrder
    soLuong?: SortOrder
    donGia?: SortOrder
  }

  export type ChiTietDonHangAvgOrderByAggregateInput = {
    soLuong?: SortOrder
    donGia?: SortOrder
  }

  export type ChiTietDonHangMaxOrderByAggregateInput = {
    maDH?: SortOrder
    maSach?: SortOrder
    soLuong?: SortOrder
    donGia?: SortOrder
  }

  export type ChiTietDonHangMinOrderByAggregateInput = {
    maDH?: SortOrder
    maSach?: SortOrder
    soLuong?: SortOrder
    donGia?: SortOrder
  }

  export type ChiTietDonHangSumOrderByAggregateInput = {
    soLuong?: SortOrder
    donGia?: SortOrder
  }

  export type GiaoDichKhoCreateNestedManyWithoutNhanVienInput = {
    create?: XOR<GiaoDichKhoCreateWithoutNhanVienInput, GiaoDichKhoUncheckedCreateWithoutNhanVienInput> | GiaoDichKhoCreateWithoutNhanVienInput[] | GiaoDichKhoUncheckedCreateWithoutNhanVienInput[]
    connectOrCreate?: GiaoDichKhoCreateOrConnectWithoutNhanVienInput | GiaoDichKhoCreateOrConnectWithoutNhanVienInput[]
    createMany?: GiaoDichKhoCreateManyNhanVienInputEnvelope
    connect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
  }

  export type DonHangCreateNestedManyWithoutNhanVienInput = {
    create?: XOR<DonHangCreateWithoutNhanVienInput, DonHangUncheckedCreateWithoutNhanVienInput> | DonHangCreateWithoutNhanVienInput[] | DonHangUncheckedCreateWithoutNhanVienInput[]
    connectOrCreate?: DonHangCreateOrConnectWithoutNhanVienInput | DonHangCreateOrConnectWithoutNhanVienInput[]
    createMany?: DonHangCreateManyNhanVienInputEnvelope
    connect?: DonHangWhereUniqueInput | DonHangWhereUniqueInput[]
  }

  export type GiaoDichKhoUncheckedCreateNestedManyWithoutNhanVienInput = {
    create?: XOR<GiaoDichKhoCreateWithoutNhanVienInput, GiaoDichKhoUncheckedCreateWithoutNhanVienInput> | GiaoDichKhoCreateWithoutNhanVienInput[] | GiaoDichKhoUncheckedCreateWithoutNhanVienInput[]
    connectOrCreate?: GiaoDichKhoCreateOrConnectWithoutNhanVienInput | GiaoDichKhoCreateOrConnectWithoutNhanVienInput[]
    createMany?: GiaoDichKhoCreateManyNhanVienInputEnvelope
    connect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
  }

  export type DonHangUncheckedCreateNestedManyWithoutNhanVienInput = {
    create?: XOR<DonHangCreateWithoutNhanVienInput, DonHangUncheckedCreateWithoutNhanVienInput> | DonHangCreateWithoutNhanVienInput[] | DonHangUncheckedCreateWithoutNhanVienInput[]
    connectOrCreate?: DonHangCreateOrConnectWithoutNhanVienInput | DonHangCreateOrConnectWithoutNhanVienInput[]
    createMany?: DonHangCreateManyNhanVienInputEnvelope
    connect?: DonHangWhereUniqueInput | DonHangWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumChucVuFieldUpdateOperationsInput = {
    set?: $Enums.ChucVu
  }

  export type GiaoDichKhoUpdateManyWithoutNhanVienNestedInput = {
    create?: XOR<GiaoDichKhoCreateWithoutNhanVienInput, GiaoDichKhoUncheckedCreateWithoutNhanVienInput> | GiaoDichKhoCreateWithoutNhanVienInput[] | GiaoDichKhoUncheckedCreateWithoutNhanVienInput[]
    connectOrCreate?: GiaoDichKhoCreateOrConnectWithoutNhanVienInput | GiaoDichKhoCreateOrConnectWithoutNhanVienInput[]
    upsert?: GiaoDichKhoUpsertWithWhereUniqueWithoutNhanVienInput | GiaoDichKhoUpsertWithWhereUniqueWithoutNhanVienInput[]
    createMany?: GiaoDichKhoCreateManyNhanVienInputEnvelope
    set?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    disconnect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    delete?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    connect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    update?: GiaoDichKhoUpdateWithWhereUniqueWithoutNhanVienInput | GiaoDichKhoUpdateWithWhereUniqueWithoutNhanVienInput[]
    updateMany?: GiaoDichKhoUpdateManyWithWhereWithoutNhanVienInput | GiaoDichKhoUpdateManyWithWhereWithoutNhanVienInput[]
    deleteMany?: GiaoDichKhoScalarWhereInput | GiaoDichKhoScalarWhereInput[]
  }

  export type DonHangUpdateManyWithoutNhanVienNestedInput = {
    create?: XOR<DonHangCreateWithoutNhanVienInput, DonHangUncheckedCreateWithoutNhanVienInput> | DonHangCreateWithoutNhanVienInput[] | DonHangUncheckedCreateWithoutNhanVienInput[]
    connectOrCreate?: DonHangCreateOrConnectWithoutNhanVienInput | DonHangCreateOrConnectWithoutNhanVienInput[]
    upsert?: DonHangUpsertWithWhereUniqueWithoutNhanVienInput | DonHangUpsertWithWhereUniqueWithoutNhanVienInput[]
    createMany?: DonHangCreateManyNhanVienInputEnvelope
    set?: DonHangWhereUniqueInput | DonHangWhereUniqueInput[]
    disconnect?: DonHangWhereUniqueInput | DonHangWhereUniqueInput[]
    delete?: DonHangWhereUniqueInput | DonHangWhereUniqueInput[]
    connect?: DonHangWhereUniqueInput | DonHangWhereUniqueInput[]
    update?: DonHangUpdateWithWhereUniqueWithoutNhanVienInput | DonHangUpdateWithWhereUniqueWithoutNhanVienInput[]
    updateMany?: DonHangUpdateManyWithWhereWithoutNhanVienInput | DonHangUpdateManyWithWhereWithoutNhanVienInput[]
    deleteMany?: DonHangScalarWhereInput | DonHangScalarWhereInput[]
  }

  export type GiaoDichKhoUncheckedUpdateManyWithoutNhanVienNestedInput = {
    create?: XOR<GiaoDichKhoCreateWithoutNhanVienInput, GiaoDichKhoUncheckedCreateWithoutNhanVienInput> | GiaoDichKhoCreateWithoutNhanVienInput[] | GiaoDichKhoUncheckedCreateWithoutNhanVienInput[]
    connectOrCreate?: GiaoDichKhoCreateOrConnectWithoutNhanVienInput | GiaoDichKhoCreateOrConnectWithoutNhanVienInput[]
    upsert?: GiaoDichKhoUpsertWithWhereUniqueWithoutNhanVienInput | GiaoDichKhoUpsertWithWhereUniqueWithoutNhanVienInput[]
    createMany?: GiaoDichKhoCreateManyNhanVienInputEnvelope
    set?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    disconnect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    delete?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    connect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    update?: GiaoDichKhoUpdateWithWhereUniqueWithoutNhanVienInput | GiaoDichKhoUpdateWithWhereUniqueWithoutNhanVienInput[]
    updateMany?: GiaoDichKhoUpdateManyWithWhereWithoutNhanVienInput | GiaoDichKhoUpdateManyWithWhereWithoutNhanVienInput[]
    deleteMany?: GiaoDichKhoScalarWhereInput | GiaoDichKhoScalarWhereInput[]
  }

  export type DonHangUncheckedUpdateManyWithoutNhanVienNestedInput = {
    create?: XOR<DonHangCreateWithoutNhanVienInput, DonHangUncheckedCreateWithoutNhanVienInput> | DonHangCreateWithoutNhanVienInput[] | DonHangUncheckedCreateWithoutNhanVienInput[]
    connectOrCreate?: DonHangCreateOrConnectWithoutNhanVienInput | DonHangCreateOrConnectWithoutNhanVienInput[]
    upsert?: DonHangUpsertWithWhereUniqueWithoutNhanVienInput | DonHangUpsertWithWhereUniqueWithoutNhanVienInput[]
    createMany?: DonHangCreateManyNhanVienInputEnvelope
    set?: DonHangWhereUniqueInput | DonHangWhereUniqueInput[]
    disconnect?: DonHangWhereUniqueInput | DonHangWhereUniqueInput[]
    delete?: DonHangWhereUniqueInput | DonHangWhereUniqueInput[]
    connect?: DonHangWhereUniqueInput | DonHangWhereUniqueInput[]
    update?: DonHangUpdateWithWhereUniqueWithoutNhanVienInput | DonHangUpdateWithWhereUniqueWithoutNhanVienInput[]
    updateMany?: DonHangUpdateManyWithWhereWithoutNhanVienInput | DonHangUpdateManyWithWhereWithoutNhanVienInput[]
    deleteMany?: DonHangScalarWhereInput | DonHangScalarWhereInput[]
  }

  export type GiaoDichKhoCreateNestedManyWithoutKhoHangInput = {
    create?: XOR<GiaoDichKhoCreateWithoutKhoHangInput, GiaoDichKhoUncheckedCreateWithoutKhoHangInput> | GiaoDichKhoCreateWithoutKhoHangInput[] | GiaoDichKhoUncheckedCreateWithoutKhoHangInput[]
    connectOrCreate?: GiaoDichKhoCreateOrConnectWithoutKhoHangInput | GiaoDichKhoCreateOrConnectWithoutKhoHangInput[]
    createMany?: GiaoDichKhoCreateManyKhoHangInputEnvelope
    connect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
  }

  export type TonKhoCreateNestedManyWithoutKhoHangInput = {
    create?: XOR<TonKhoCreateWithoutKhoHangInput, TonKhoUncheckedCreateWithoutKhoHangInput> | TonKhoCreateWithoutKhoHangInput[] | TonKhoUncheckedCreateWithoutKhoHangInput[]
    connectOrCreate?: TonKhoCreateOrConnectWithoutKhoHangInput | TonKhoCreateOrConnectWithoutKhoHangInput[]
    createMany?: TonKhoCreateManyKhoHangInputEnvelope
    connect?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
  }

  export type GiaoDichKhoUncheckedCreateNestedManyWithoutKhoHangInput = {
    create?: XOR<GiaoDichKhoCreateWithoutKhoHangInput, GiaoDichKhoUncheckedCreateWithoutKhoHangInput> | GiaoDichKhoCreateWithoutKhoHangInput[] | GiaoDichKhoUncheckedCreateWithoutKhoHangInput[]
    connectOrCreate?: GiaoDichKhoCreateOrConnectWithoutKhoHangInput | GiaoDichKhoCreateOrConnectWithoutKhoHangInput[]
    createMany?: GiaoDichKhoCreateManyKhoHangInputEnvelope
    connect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
  }

  export type TonKhoUncheckedCreateNestedManyWithoutKhoHangInput = {
    create?: XOR<TonKhoCreateWithoutKhoHangInput, TonKhoUncheckedCreateWithoutKhoHangInput> | TonKhoCreateWithoutKhoHangInput[] | TonKhoUncheckedCreateWithoutKhoHangInput[]
    connectOrCreate?: TonKhoCreateOrConnectWithoutKhoHangInput | TonKhoCreateOrConnectWithoutKhoHangInput[]
    createMany?: TonKhoCreateManyKhoHangInputEnvelope
    connect?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GiaoDichKhoUpdateManyWithoutKhoHangNestedInput = {
    create?: XOR<GiaoDichKhoCreateWithoutKhoHangInput, GiaoDichKhoUncheckedCreateWithoutKhoHangInput> | GiaoDichKhoCreateWithoutKhoHangInput[] | GiaoDichKhoUncheckedCreateWithoutKhoHangInput[]
    connectOrCreate?: GiaoDichKhoCreateOrConnectWithoutKhoHangInput | GiaoDichKhoCreateOrConnectWithoutKhoHangInput[]
    upsert?: GiaoDichKhoUpsertWithWhereUniqueWithoutKhoHangInput | GiaoDichKhoUpsertWithWhereUniqueWithoutKhoHangInput[]
    createMany?: GiaoDichKhoCreateManyKhoHangInputEnvelope
    set?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    disconnect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    delete?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    connect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    update?: GiaoDichKhoUpdateWithWhereUniqueWithoutKhoHangInput | GiaoDichKhoUpdateWithWhereUniqueWithoutKhoHangInput[]
    updateMany?: GiaoDichKhoUpdateManyWithWhereWithoutKhoHangInput | GiaoDichKhoUpdateManyWithWhereWithoutKhoHangInput[]
    deleteMany?: GiaoDichKhoScalarWhereInput | GiaoDichKhoScalarWhereInput[]
  }

  export type TonKhoUpdateManyWithoutKhoHangNestedInput = {
    create?: XOR<TonKhoCreateWithoutKhoHangInput, TonKhoUncheckedCreateWithoutKhoHangInput> | TonKhoCreateWithoutKhoHangInput[] | TonKhoUncheckedCreateWithoutKhoHangInput[]
    connectOrCreate?: TonKhoCreateOrConnectWithoutKhoHangInput | TonKhoCreateOrConnectWithoutKhoHangInput[]
    upsert?: TonKhoUpsertWithWhereUniqueWithoutKhoHangInput | TonKhoUpsertWithWhereUniqueWithoutKhoHangInput[]
    createMany?: TonKhoCreateManyKhoHangInputEnvelope
    set?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    disconnect?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    delete?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    connect?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    update?: TonKhoUpdateWithWhereUniqueWithoutKhoHangInput | TonKhoUpdateWithWhereUniqueWithoutKhoHangInput[]
    updateMany?: TonKhoUpdateManyWithWhereWithoutKhoHangInput | TonKhoUpdateManyWithWhereWithoutKhoHangInput[]
    deleteMany?: TonKhoScalarWhereInput | TonKhoScalarWhereInput[]
  }

  export type GiaoDichKhoUncheckedUpdateManyWithoutKhoHangNestedInput = {
    create?: XOR<GiaoDichKhoCreateWithoutKhoHangInput, GiaoDichKhoUncheckedCreateWithoutKhoHangInput> | GiaoDichKhoCreateWithoutKhoHangInput[] | GiaoDichKhoUncheckedCreateWithoutKhoHangInput[]
    connectOrCreate?: GiaoDichKhoCreateOrConnectWithoutKhoHangInput | GiaoDichKhoCreateOrConnectWithoutKhoHangInput[]
    upsert?: GiaoDichKhoUpsertWithWhereUniqueWithoutKhoHangInput | GiaoDichKhoUpsertWithWhereUniqueWithoutKhoHangInput[]
    createMany?: GiaoDichKhoCreateManyKhoHangInputEnvelope
    set?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    disconnect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    delete?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    connect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    update?: GiaoDichKhoUpdateWithWhereUniqueWithoutKhoHangInput | GiaoDichKhoUpdateWithWhereUniqueWithoutKhoHangInput[]
    updateMany?: GiaoDichKhoUpdateManyWithWhereWithoutKhoHangInput | GiaoDichKhoUpdateManyWithWhereWithoutKhoHangInput[]
    deleteMany?: GiaoDichKhoScalarWhereInput | GiaoDichKhoScalarWhereInput[]
  }

  export type TonKhoUncheckedUpdateManyWithoutKhoHangNestedInput = {
    create?: XOR<TonKhoCreateWithoutKhoHangInput, TonKhoUncheckedCreateWithoutKhoHangInput> | TonKhoCreateWithoutKhoHangInput[] | TonKhoUncheckedCreateWithoutKhoHangInput[]
    connectOrCreate?: TonKhoCreateOrConnectWithoutKhoHangInput | TonKhoCreateOrConnectWithoutKhoHangInput[]
    upsert?: TonKhoUpsertWithWhereUniqueWithoutKhoHangInput | TonKhoUpsertWithWhereUniqueWithoutKhoHangInput[]
    createMany?: TonKhoCreateManyKhoHangInputEnvelope
    set?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    disconnect?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    delete?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    connect?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    update?: TonKhoUpdateWithWhereUniqueWithoutKhoHangInput | TonKhoUpdateWithWhereUniqueWithoutKhoHangInput[]
    updateMany?: TonKhoUpdateManyWithWhereWithoutKhoHangInput | TonKhoUpdateManyWithWhereWithoutKhoHangInput[]
    deleteMany?: TonKhoScalarWhereInput | TonKhoScalarWhereInput[]
  }

  export type GiaoDichKhoCreateNestedManyWithoutSachInput = {
    create?: XOR<GiaoDichKhoCreateWithoutSachInput, GiaoDichKhoUncheckedCreateWithoutSachInput> | GiaoDichKhoCreateWithoutSachInput[] | GiaoDichKhoUncheckedCreateWithoutSachInput[]
    connectOrCreate?: GiaoDichKhoCreateOrConnectWithoutSachInput | GiaoDichKhoCreateOrConnectWithoutSachInput[]
    createMany?: GiaoDichKhoCreateManySachInputEnvelope
    connect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
  }

  export type TonKhoCreateNestedManyWithoutSachInput = {
    create?: XOR<TonKhoCreateWithoutSachInput, TonKhoUncheckedCreateWithoutSachInput> | TonKhoCreateWithoutSachInput[] | TonKhoUncheckedCreateWithoutSachInput[]
    connectOrCreate?: TonKhoCreateOrConnectWithoutSachInput | TonKhoCreateOrConnectWithoutSachInput[]
    createMany?: TonKhoCreateManySachInputEnvelope
    connect?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
  }

  export type ChiTietDonHangCreateNestedManyWithoutSachInput = {
    create?: XOR<ChiTietDonHangCreateWithoutSachInput, ChiTietDonHangUncheckedCreateWithoutSachInput> | ChiTietDonHangCreateWithoutSachInput[] | ChiTietDonHangUncheckedCreateWithoutSachInput[]
    connectOrCreate?: ChiTietDonHangCreateOrConnectWithoutSachInput | ChiTietDonHangCreateOrConnectWithoutSachInput[]
    createMany?: ChiTietDonHangCreateManySachInputEnvelope
    connect?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
  }

  export type GiaoDichKhoUncheckedCreateNestedManyWithoutSachInput = {
    create?: XOR<GiaoDichKhoCreateWithoutSachInput, GiaoDichKhoUncheckedCreateWithoutSachInput> | GiaoDichKhoCreateWithoutSachInput[] | GiaoDichKhoUncheckedCreateWithoutSachInput[]
    connectOrCreate?: GiaoDichKhoCreateOrConnectWithoutSachInput | GiaoDichKhoCreateOrConnectWithoutSachInput[]
    createMany?: GiaoDichKhoCreateManySachInputEnvelope
    connect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
  }

  export type TonKhoUncheckedCreateNestedManyWithoutSachInput = {
    create?: XOR<TonKhoCreateWithoutSachInput, TonKhoUncheckedCreateWithoutSachInput> | TonKhoCreateWithoutSachInput[] | TonKhoUncheckedCreateWithoutSachInput[]
    connectOrCreate?: TonKhoCreateOrConnectWithoutSachInput | TonKhoCreateOrConnectWithoutSachInput[]
    createMany?: TonKhoCreateManySachInputEnvelope
    connect?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
  }

  export type ChiTietDonHangUncheckedCreateNestedManyWithoutSachInput = {
    create?: XOR<ChiTietDonHangCreateWithoutSachInput, ChiTietDonHangUncheckedCreateWithoutSachInput> | ChiTietDonHangCreateWithoutSachInput[] | ChiTietDonHangUncheckedCreateWithoutSachInput[]
    connectOrCreate?: ChiTietDonHangCreateOrConnectWithoutSachInput | ChiTietDonHangCreateOrConnectWithoutSachInput[]
    createMany?: ChiTietDonHangCreateManySachInputEnvelope
    connect?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumTrangThaiSachFieldUpdateOperationsInput = {
    set?: $Enums.TrangThaiSach
  }

  export type GiaoDichKhoUpdateManyWithoutSachNestedInput = {
    create?: XOR<GiaoDichKhoCreateWithoutSachInput, GiaoDichKhoUncheckedCreateWithoutSachInput> | GiaoDichKhoCreateWithoutSachInput[] | GiaoDichKhoUncheckedCreateWithoutSachInput[]
    connectOrCreate?: GiaoDichKhoCreateOrConnectWithoutSachInput | GiaoDichKhoCreateOrConnectWithoutSachInput[]
    upsert?: GiaoDichKhoUpsertWithWhereUniqueWithoutSachInput | GiaoDichKhoUpsertWithWhereUniqueWithoutSachInput[]
    createMany?: GiaoDichKhoCreateManySachInputEnvelope
    set?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    disconnect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    delete?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    connect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    update?: GiaoDichKhoUpdateWithWhereUniqueWithoutSachInput | GiaoDichKhoUpdateWithWhereUniqueWithoutSachInput[]
    updateMany?: GiaoDichKhoUpdateManyWithWhereWithoutSachInput | GiaoDichKhoUpdateManyWithWhereWithoutSachInput[]
    deleteMany?: GiaoDichKhoScalarWhereInput | GiaoDichKhoScalarWhereInput[]
  }

  export type TonKhoUpdateManyWithoutSachNestedInput = {
    create?: XOR<TonKhoCreateWithoutSachInput, TonKhoUncheckedCreateWithoutSachInput> | TonKhoCreateWithoutSachInput[] | TonKhoUncheckedCreateWithoutSachInput[]
    connectOrCreate?: TonKhoCreateOrConnectWithoutSachInput | TonKhoCreateOrConnectWithoutSachInput[]
    upsert?: TonKhoUpsertWithWhereUniqueWithoutSachInput | TonKhoUpsertWithWhereUniqueWithoutSachInput[]
    createMany?: TonKhoCreateManySachInputEnvelope
    set?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    disconnect?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    delete?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    connect?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    update?: TonKhoUpdateWithWhereUniqueWithoutSachInput | TonKhoUpdateWithWhereUniqueWithoutSachInput[]
    updateMany?: TonKhoUpdateManyWithWhereWithoutSachInput | TonKhoUpdateManyWithWhereWithoutSachInput[]
    deleteMany?: TonKhoScalarWhereInput | TonKhoScalarWhereInput[]
  }

  export type ChiTietDonHangUpdateManyWithoutSachNestedInput = {
    create?: XOR<ChiTietDonHangCreateWithoutSachInput, ChiTietDonHangUncheckedCreateWithoutSachInput> | ChiTietDonHangCreateWithoutSachInput[] | ChiTietDonHangUncheckedCreateWithoutSachInput[]
    connectOrCreate?: ChiTietDonHangCreateOrConnectWithoutSachInput | ChiTietDonHangCreateOrConnectWithoutSachInput[]
    upsert?: ChiTietDonHangUpsertWithWhereUniqueWithoutSachInput | ChiTietDonHangUpsertWithWhereUniqueWithoutSachInput[]
    createMany?: ChiTietDonHangCreateManySachInputEnvelope
    set?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    disconnect?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    delete?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    connect?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    update?: ChiTietDonHangUpdateWithWhereUniqueWithoutSachInput | ChiTietDonHangUpdateWithWhereUniqueWithoutSachInput[]
    updateMany?: ChiTietDonHangUpdateManyWithWhereWithoutSachInput | ChiTietDonHangUpdateManyWithWhereWithoutSachInput[]
    deleteMany?: ChiTietDonHangScalarWhereInput | ChiTietDonHangScalarWhereInput[]
  }

  export type GiaoDichKhoUncheckedUpdateManyWithoutSachNestedInput = {
    create?: XOR<GiaoDichKhoCreateWithoutSachInput, GiaoDichKhoUncheckedCreateWithoutSachInput> | GiaoDichKhoCreateWithoutSachInput[] | GiaoDichKhoUncheckedCreateWithoutSachInput[]
    connectOrCreate?: GiaoDichKhoCreateOrConnectWithoutSachInput | GiaoDichKhoCreateOrConnectWithoutSachInput[]
    upsert?: GiaoDichKhoUpsertWithWhereUniqueWithoutSachInput | GiaoDichKhoUpsertWithWhereUniqueWithoutSachInput[]
    createMany?: GiaoDichKhoCreateManySachInputEnvelope
    set?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    disconnect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    delete?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    connect?: GiaoDichKhoWhereUniqueInput | GiaoDichKhoWhereUniqueInput[]
    update?: GiaoDichKhoUpdateWithWhereUniqueWithoutSachInput | GiaoDichKhoUpdateWithWhereUniqueWithoutSachInput[]
    updateMany?: GiaoDichKhoUpdateManyWithWhereWithoutSachInput | GiaoDichKhoUpdateManyWithWhereWithoutSachInput[]
    deleteMany?: GiaoDichKhoScalarWhereInput | GiaoDichKhoScalarWhereInput[]
  }

  export type TonKhoUncheckedUpdateManyWithoutSachNestedInput = {
    create?: XOR<TonKhoCreateWithoutSachInput, TonKhoUncheckedCreateWithoutSachInput> | TonKhoCreateWithoutSachInput[] | TonKhoUncheckedCreateWithoutSachInput[]
    connectOrCreate?: TonKhoCreateOrConnectWithoutSachInput | TonKhoCreateOrConnectWithoutSachInput[]
    upsert?: TonKhoUpsertWithWhereUniqueWithoutSachInput | TonKhoUpsertWithWhereUniqueWithoutSachInput[]
    createMany?: TonKhoCreateManySachInputEnvelope
    set?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    disconnect?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    delete?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    connect?: TonKhoWhereUniqueInput | TonKhoWhereUniqueInput[]
    update?: TonKhoUpdateWithWhereUniqueWithoutSachInput | TonKhoUpdateWithWhereUniqueWithoutSachInput[]
    updateMany?: TonKhoUpdateManyWithWhereWithoutSachInput | TonKhoUpdateManyWithWhereWithoutSachInput[]
    deleteMany?: TonKhoScalarWhereInput | TonKhoScalarWhereInput[]
  }

  export type ChiTietDonHangUncheckedUpdateManyWithoutSachNestedInput = {
    create?: XOR<ChiTietDonHangCreateWithoutSachInput, ChiTietDonHangUncheckedCreateWithoutSachInput> | ChiTietDonHangCreateWithoutSachInput[] | ChiTietDonHangUncheckedCreateWithoutSachInput[]
    connectOrCreate?: ChiTietDonHangCreateOrConnectWithoutSachInput | ChiTietDonHangCreateOrConnectWithoutSachInput[]
    upsert?: ChiTietDonHangUpsertWithWhereUniqueWithoutSachInput | ChiTietDonHangUpsertWithWhereUniqueWithoutSachInput[]
    createMany?: ChiTietDonHangCreateManySachInputEnvelope
    set?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    disconnect?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    delete?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    connect?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    update?: ChiTietDonHangUpdateWithWhereUniqueWithoutSachInput | ChiTietDonHangUpdateWithWhereUniqueWithoutSachInput[]
    updateMany?: ChiTietDonHangUpdateManyWithWhereWithoutSachInput | ChiTietDonHangUpdateManyWithWhereWithoutSachInput[]
    deleteMany?: ChiTietDonHangScalarWhereInput | ChiTietDonHangScalarWhereInput[]
  }

  export type KhoHangCreateNestedOneWithoutGiaoDichKhoInput = {
    create?: XOR<KhoHangCreateWithoutGiaoDichKhoInput, KhoHangUncheckedCreateWithoutGiaoDichKhoInput>
    connectOrCreate?: KhoHangCreateOrConnectWithoutGiaoDichKhoInput
    connect?: KhoHangWhereUniqueInput
  }

  export type SachCreateNestedOneWithoutGiaoDichKhoInput = {
    create?: XOR<SachCreateWithoutGiaoDichKhoInput, SachUncheckedCreateWithoutGiaoDichKhoInput>
    connectOrCreate?: SachCreateOrConnectWithoutGiaoDichKhoInput
    connect?: SachWhereUniqueInput
  }

  export type NhanVienCreateNestedOneWithoutGiaoDichKhoInput = {
    create?: XOR<NhanVienCreateWithoutGiaoDichKhoInput, NhanVienUncheckedCreateWithoutGiaoDichKhoInput>
    connectOrCreate?: NhanVienCreateOrConnectWithoutGiaoDichKhoInput
    connect?: NhanVienWhereUniqueInput
  }

  export type EnumLoaiGiaoDichFieldUpdateOperationsInput = {
    set?: $Enums.LoaiGiaoDich
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KhoHangUpdateOneRequiredWithoutGiaoDichKhoNestedInput = {
    create?: XOR<KhoHangCreateWithoutGiaoDichKhoInput, KhoHangUncheckedCreateWithoutGiaoDichKhoInput>
    connectOrCreate?: KhoHangCreateOrConnectWithoutGiaoDichKhoInput
    upsert?: KhoHangUpsertWithoutGiaoDichKhoInput
    connect?: KhoHangWhereUniqueInput
    update?: XOR<XOR<KhoHangUpdateToOneWithWhereWithoutGiaoDichKhoInput, KhoHangUpdateWithoutGiaoDichKhoInput>, KhoHangUncheckedUpdateWithoutGiaoDichKhoInput>
  }

  export type SachUpdateOneRequiredWithoutGiaoDichKhoNestedInput = {
    create?: XOR<SachCreateWithoutGiaoDichKhoInput, SachUncheckedCreateWithoutGiaoDichKhoInput>
    connectOrCreate?: SachCreateOrConnectWithoutGiaoDichKhoInput
    upsert?: SachUpsertWithoutGiaoDichKhoInput
    connect?: SachWhereUniqueInput
    update?: XOR<XOR<SachUpdateToOneWithWhereWithoutGiaoDichKhoInput, SachUpdateWithoutGiaoDichKhoInput>, SachUncheckedUpdateWithoutGiaoDichKhoInput>
  }

  export type NhanVienUpdateOneRequiredWithoutGiaoDichKhoNestedInput = {
    create?: XOR<NhanVienCreateWithoutGiaoDichKhoInput, NhanVienUncheckedCreateWithoutGiaoDichKhoInput>
    connectOrCreate?: NhanVienCreateOrConnectWithoutGiaoDichKhoInput
    upsert?: NhanVienUpsertWithoutGiaoDichKhoInput
    connect?: NhanVienWhereUniqueInput
    update?: XOR<XOR<NhanVienUpdateToOneWithWhereWithoutGiaoDichKhoInput, NhanVienUpdateWithoutGiaoDichKhoInput>, NhanVienUncheckedUpdateWithoutGiaoDichKhoInput>
  }

  export type KhoHangCreateNestedOneWithoutTonKhoInput = {
    create?: XOR<KhoHangCreateWithoutTonKhoInput, KhoHangUncheckedCreateWithoutTonKhoInput>
    connectOrCreate?: KhoHangCreateOrConnectWithoutTonKhoInput
    connect?: KhoHangWhereUniqueInput
  }

  export type SachCreateNestedOneWithoutTonKhoInput = {
    create?: XOR<SachCreateWithoutTonKhoInput, SachUncheckedCreateWithoutTonKhoInput>
    connectOrCreate?: SachCreateOrConnectWithoutTonKhoInput
    connect?: SachWhereUniqueInput
  }

  export type KhoHangUpdateOneRequiredWithoutTonKhoNestedInput = {
    create?: XOR<KhoHangCreateWithoutTonKhoInput, KhoHangUncheckedCreateWithoutTonKhoInput>
    connectOrCreate?: KhoHangCreateOrConnectWithoutTonKhoInput
    upsert?: KhoHangUpsertWithoutTonKhoInput
    connect?: KhoHangWhereUniqueInput
    update?: XOR<XOR<KhoHangUpdateToOneWithWhereWithoutTonKhoInput, KhoHangUpdateWithoutTonKhoInput>, KhoHangUncheckedUpdateWithoutTonKhoInput>
  }

  export type SachUpdateOneRequiredWithoutTonKhoNestedInput = {
    create?: XOR<SachCreateWithoutTonKhoInput, SachUncheckedCreateWithoutTonKhoInput>
    connectOrCreate?: SachCreateOrConnectWithoutTonKhoInput
    upsert?: SachUpsertWithoutTonKhoInput
    connect?: SachWhereUniqueInput
    update?: XOR<XOR<SachUpdateToOneWithWhereWithoutTonKhoInput, SachUpdateWithoutTonKhoInput>, SachUncheckedUpdateWithoutTonKhoInput>
  }

  export type NhanVienCreateNestedOneWithoutDonHangInput = {
    create?: XOR<NhanVienCreateWithoutDonHangInput, NhanVienUncheckedCreateWithoutDonHangInput>
    connectOrCreate?: NhanVienCreateOrConnectWithoutDonHangInput
    connect?: NhanVienWhereUniqueInput
  }

  export type ChiTietDonHangCreateNestedManyWithoutDonHangInput = {
    create?: XOR<ChiTietDonHangCreateWithoutDonHangInput, ChiTietDonHangUncheckedCreateWithoutDonHangInput> | ChiTietDonHangCreateWithoutDonHangInput[] | ChiTietDonHangUncheckedCreateWithoutDonHangInput[]
    connectOrCreate?: ChiTietDonHangCreateOrConnectWithoutDonHangInput | ChiTietDonHangCreateOrConnectWithoutDonHangInput[]
    createMany?: ChiTietDonHangCreateManyDonHangInputEnvelope
    connect?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
  }

  export type ChiTietDonHangUncheckedCreateNestedManyWithoutDonHangInput = {
    create?: XOR<ChiTietDonHangCreateWithoutDonHangInput, ChiTietDonHangUncheckedCreateWithoutDonHangInput> | ChiTietDonHangCreateWithoutDonHangInput[] | ChiTietDonHangUncheckedCreateWithoutDonHangInput[]
    connectOrCreate?: ChiTietDonHangCreateOrConnectWithoutDonHangInput | ChiTietDonHangCreateOrConnectWithoutDonHangInput[]
    createMany?: ChiTietDonHangCreateManyDonHangInputEnvelope
    connect?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
  }

  export type EnumTrangThaiDonHangFieldUpdateOperationsInput = {
    set?: $Enums.TrangThaiDonHang
  }

  export type NhanVienUpdateOneRequiredWithoutDonHangNestedInput = {
    create?: XOR<NhanVienCreateWithoutDonHangInput, NhanVienUncheckedCreateWithoutDonHangInput>
    connectOrCreate?: NhanVienCreateOrConnectWithoutDonHangInput
    upsert?: NhanVienUpsertWithoutDonHangInput
    connect?: NhanVienWhereUniqueInput
    update?: XOR<XOR<NhanVienUpdateToOneWithWhereWithoutDonHangInput, NhanVienUpdateWithoutDonHangInput>, NhanVienUncheckedUpdateWithoutDonHangInput>
  }

  export type ChiTietDonHangUpdateManyWithoutDonHangNestedInput = {
    create?: XOR<ChiTietDonHangCreateWithoutDonHangInput, ChiTietDonHangUncheckedCreateWithoutDonHangInput> | ChiTietDonHangCreateWithoutDonHangInput[] | ChiTietDonHangUncheckedCreateWithoutDonHangInput[]
    connectOrCreate?: ChiTietDonHangCreateOrConnectWithoutDonHangInput | ChiTietDonHangCreateOrConnectWithoutDonHangInput[]
    upsert?: ChiTietDonHangUpsertWithWhereUniqueWithoutDonHangInput | ChiTietDonHangUpsertWithWhereUniqueWithoutDonHangInput[]
    createMany?: ChiTietDonHangCreateManyDonHangInputEnvelope
    set?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    disconnect?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    delete?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    connect?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    update?: ChiTietDonHangUpdateWithWhereUniqueWithoutDonHangInput | ChiTietDonHangUpdateWithWhereUniqueWithoutDonHangInput[]
    updateMany?: ChiTietDonHangUpdateManyWithWhereWithoutDonHangInput | ChiTietDonHangUpdateManyWithWhereWithoutDonHangInput[]
    deleteMany?: ChiTietDonHangScalarWhereInput | ChiTietDonHangScalarWhereInput[]
  }

  export type ChiTietDonHangUncheckedUpdateManyWithoutDonHangNestedInput = {
    create?: XOR<ChiTietDonHangCreateWithoutDonHangInput, ChiTietDonHangUncheckedCreateWithoutDonHangInput> | ChiTietDonHangCreateWithoutDonHangInput[] | ChiTietDonHangUncheckedCreateWithoutDonHangInput[]
    connectOrCreate?: ChiTietDonHangCreateOrConnectWithoutDonHangInput | ChiTietDonHangCreateOrConnectWithoutDonHangInput[]
    upsert?: ChiTietDonHangUpsertWithWhereUniqueWithoutDonHangInput | ChiTietDonHangUpsertWithWhereUniqueWithoutDonHangInput[]
    createMany?: ChiTietDonHangCreateManyDonHangInputEnvelope
    set?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    disconnect?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    delete?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    connect?: ChiTietDonHangWhereUniqueInput | ChiTietDonHangWhereUniqueInput[]
    update?: ChiTietDonHangUpdateWithWhereUniqueWithoutDonHangInput | ChiTietDonHangUpdateWithWhereUniqueWithoutDonHangInput[]
    updateMany?: ChiTietDonHangUpdateManyWithWhereWithoutDonHangInput | ChiTietDonHangUpdateManyWithWhereWithoutDonHangInput[]
    deleteMany?: ChiTietDonHangScalarWhereInput | ChiTietDonHangScalarWhereInput[]
  }

  export type DonHangCreateNestedOneWithoutChiTietInput = {
    create?: XOR<DonHangCreateWithoutChiTietInput, DonHangUncheckedCreateWithoutChiTietInput>
    connectOrCreate?: DonHangCreateOrConnectWithoutChiTietInput
    connect?: DonHangWhereUniqueInput
  }

  export type SachCreateNestedOneWithoutChiTietDonHangInput = {
    create?: XOR<SachCreateWithoutChiTietDonHangInput, SachUncheckedCreateWithoutChiTietDonHangInput>
    connectOrCreate?: SachCreateOrConnectWithoutChiTietDonHangInput
    connect?: SachWhereUniqueInput
  }

  export type DonHangUpdateOneRequiredWithoutChiTietNestedInput = {
    create?: XOR<DonHangCreateWithoutChiTietInput, DonHangUncheckedCreateWithoutChiTietInput>
    connectOrCreate?: DonHangCreateOrConnectWithoutChiTietInput
    upsert?: DonHangUpsertWithoutChiTietInput
    connect?: DonHangWhereUniqueInput
    update?: XOR<XOR<DonHangUpdateToOneWithWhereWithoutChiTietInput, DonHangUpdateWithoutChiTietInput>, DonHangUncheckedUpdateWithoutChiTietInput>
  }

  export type SachUpdateOneRequiredWithoutChiTietDonHangNestedInput = {
    create?: XOR<SachCreateWithoutChiTietDonHangInput, SachUncheckedCreateWithoutChiTietDonHangInput>
    connectOrCreate?: SachCreateOrConnectWithoutChiTietDonHangInput
    upsert?: SachUpsertWithoutChiTietDonHangInput
    connect?: SachWhereUniqueInput
    update?: XOR<XOR<SachUpdateToOneWithWhereWithoutChiTietDonHangInput, SachUpdateWithoutChiTietDonHangInput>, SachUncheckedUpdateWithoutChiTietDonHangInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumChucVuFilter<$PrismaModel = never> = {
    equals?: $Enums.ChucVu | EnumChucVuFieldRefInput<$PrismaModel>
    in?: $Enums.ChucVu[] | ListEnumChucVuFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChucVu[] | ListEnumChucVuFieldRefInput<$PrismaModel>
    not?: NestedEnumChucVuFilter<$PrismaModel> | $Enums.ChucVu
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumChucVuWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChucVu | EnumChucVuFieldRefInput<$PrismaModel>
    in?: $Enums.ChucVu[] | ListEnumChucVuFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChucVu[] | ListEnumChucVuFieldRefInput<$PrismaModel>
    not?: NestedEnumChucVuWithAggregatesFilter<$PrismaModel> | $Enums.ChucVu
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChucVuFilter<$PrismaModel>
    _max?: NestedEnumChucVuFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumTrangThaiSachFilter<$PrismaModel = never> = {
    equals?: $Enums.TrangThaiSach | EnumTrangThaiSachFieldRefInput<$PrismaModel>
    in?: $Enums.TrangThaiSach[] | ListEnumTrangThaiSachFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrangThaiSach[] | ListEnumTrangThaiSachFieldRefInput<$PrismaModel>
    not?: NestedEnumTrangThaiSachFilter<$PrismaModel> | $Enums.TrangThaiSach
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTrangThaiSachWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrangThaiSach | EnumTrangThaiSachFieldRefInput<$PrismaModel>
    in?: $Enums.TrangThaiSach[] | ListEnumTrangThaiSachFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrangThaiSach[] | ListEnumTrangThaiSachFieldRefInput<$PrismaModel>
    not?: NestedEnumTrangThaiSachWithAggregatesFilter<$PrismaModel> | $Enums.TrangThaiSach
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrangThaiSachFilter<$PrismaModel>
    _max?: NestedEnumTrangThaiSachFilter<$PrismaModel>
  }

  export type NestedEnumLoaiGiaoDichFilter<$PrismaModel = never> = {
    equals?: $Enums.LoaiGiaoDich | EnumLoaiGiaoDichFieldRefInput<$PrismaModel>
    in?: $Enums.LoaiGiaoDich[] | ListEnumLoaiGiaoDichFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoaiGiaoDich[] | ListEnumLoaiGiaoDichFieldRefInput<$PrismaModel>
    not?: NestedEnumLoaiGiaoDichFilter<$PrismaModel> | $Enums.LoaiGiaoDich
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumLoaiGiaoDichWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoaiGiaoDich | EnumLoaiGiaoDichFieldRefInput<$PrismaModel>
    in?: $Enums.LoaiGiaoDich[] | ListEnumLoaiGiaoDichFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoaiGiaoDich[] | ListEnumLoaiGiaoDichFieldRefInput<$PrismaModel>
    not?: NestedEnumLoaiGiaoDichWithAggregatesFilter<$PrismaModel> | $Enums.LoaiGiaoDich
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoaiGiaoDichFilter<$PrismaModel>
    _max?: NestedEnumLoaiGiaoDichFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTrangThaiDonHangFilter<$PrismaModel = never> = {
    equals?: $Enums.TrangThaiDonHang | EnumTrangThaiDonHangFieldRefInput<$PrismaModel>
    in?: $Enums.TrangThaiDonHang[] | ListEnumTrangThaiDonHangFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrangThaiDonHang[] | ListEnumTrangThaiDonHangFieldRefInput<$PrismaModel>
    not?: NestedEnumTrangThaiDonHangFilter<$PrismaModel> | $Enums.TrangThaiDonHang
  }

  export type NestedEnumTrangThaiDonHangWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrangThaiDonHang | EnumTrangThaiDonHangFieldRefInput<$PrismaModel>
    in?: $Enums.TrangThaiDonHang[] | ListEnumTrangThaiDonHangFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrangThaiDonHang[] | ListEnumTrangThaiDonHangFieldRefInput<$PrismaModel>
    not?: NestedEnumTrangThaiDonHangWithAggregatesFilter<$PrismaModel> | $Enums.TrangThaiDonHang
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrangThaiDonHangFilter<$PrismaModel>
    _max?: NestedEnumTrangThaiDonHangFilter<$PrismaModel>
  }

  export type GiaoDichKhoCreateWithoutNhanVienInput = {
    maGD?: string
    loaiGD: $Enums.LoaiGiaoDich
    thoiGian?: Date | string
    soLuong: number
    ghiChu?: string | null
    khoHang: KhoHangCreateNestedOneWithoutGiaoDichKhoInput
    sach: SachCreateNestedOneWithoutGiaoDichKhoInput
  }

  export type GiaoDichKhoUncheckedCreateWithoutNhanVienInput = {
    maGD?: string
    maKho: string
    maSach: string
    loaiGD: $Enums.LoaiGiaoDich
    thoiGian?: Date | string
    soLuong: number
    ghiChu?: string | null
  }

  export type GiaoDichKhoCreateOrConnectWithoutNhanVienInput = {
    where: GiaoDichKhoWhereUniqueInput
    create: XOR<GiaoDichKhoCreateWithoutNhanVienInput, GiaoDichKhoUncheckedCreateWithoutNhanVienInput>
  }

  export type GiaoDichKhoCreateManyNhanVienInputEnvelope = {
    data: GiaoDichKhoCreateManyNhanVienInput | GiaoDichKhoCreateManyNhanVienInput[]
    skipDuplicates?: boolean
  }

  export type DonHangCreateWithoutNhanVienInput = {
    maDH?: string
    ngayTao?: Date | string
    tongTien?: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiDonHang
    chiTiet?: ChiTietDonHangCreateNestedManyWithoutDonHangInput
  }

  export type DonHangUncheckedCreateWithoutNhanVienInput = {
    maDH?: string
    ngayTao?: Date | string
    tongTien?: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiDonHang
    chiTiet?: ChiTietDonHangUncheckedCreateNestedManyWithoutDonHangInput
  }

  export type DonHangCreateOrConnectWithoutNhanVienInput = {
    where: DonHangWhereUniqueInput
    create: XOR<DonHangCreateWithoutNhanVienInput, DonHangUncheckedCreateWithoutNhanVienInput>
  }

  export type DonHangCreateManyNhanVienInputEnvelope = {
    data: DonHangCreateManyNhanVienInput | DonHangCreateManyNhanVienInput[]
    skipDuplicates?: boolean
  }

  export type GiaoDichKhoUpsertWithWhereUniqueWithoutNhanVienInput = {
    where: GiaoDichKhoWhereUniqueInput
    update: XOR<GiaoDichKhoUpdateWithoutNhanVienInput, GiaoDichKhoUncheckedUpdateWithoutNhanVienInput>
    create: XOR<GiaoDichKhoCreateWithoutNhanVienInput, GiaoDichKhoUncheckedCreateWithoutNhanVienInput>
  }

  export type GiaoDichKhoUpdateWithWhereUniqueWithoutNhanVienInput = {
    where: GiaoDichKhoWhereUniqueInput
    data: XOR<GiaoDichKhoUpdateWithoutNhanVienInput, GiaoDichKhoUncheckedUpdateWithoutNhanVienInput>
  }

  export type GiaoDichKhoUpdateManyWithWhereWithoutNhanVienInput = {
    where: GiaoDichKhoScalarWhereInput
    data: XOR<GiaoDichKhoUpdateManyMutationInput, GiaoDichKhoUncheckedUpdateManyWithoutNhanVienInput>
  }

  export type GiaoDichKhoScalarWhereInput = {
    AND?: GiaoDichKhoScalarWhereInput | GiaoDichKhoScalarWhereInput[]
    OR?: GiaoDichKhoScalarWhereInput[]
    NOT?: GiaoDichKhoScalarWhereInput | GiaoDichKhoScalarWhereInput[]
    maGD?: StringFilter<"GiaoDichKho"> | string
    maKho?: StringFilter<"GiaoDichKho"> | string
    maSach?: StringFilter<"GiaoDichKho"> | string
    maNV?: StringFilter<"GiaoDichKho"> | string
    loaiGD?: EnumLoaiGiaoDichFilter<"GiaoDichKho"> | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFilter<"GiaoDichKho"> | Date | string
    soLuong?: IntFilter<"GiaoDichKho"> | number
    ghiChu?: StringNullableFilter<"GiaoDichKho"> | string | null
  }

  export type DonHangUpsertWithWhereUniqueWithoutNhanVienInput = {
    where: DonHangWhereUniqueInput
    update: XOR<DonHangUpdateWithoutNhanVienInput, DonHangUncheckedUpdateWithoutNhanVienInput>
    create: XOR<DonHangCreateWithoutNhanVienInput, DonHangUncheckedCreateWithoutNhanVienInput>
  }

  export type DonHangUpdateWithWhereUniqueWithoutNhanVienInput = {
    where: DonHangWhereUniqueInput
    data: XOR<DonHangUpdateWithoutNhanVienInput, DonHangUncheckedUpdateWithoutNhanVienInput>
  }

  export type DonHangUpdateManyWithWhereWithoutNhanVienInput = {
    where: DonHangScalarWhereInput
    data: XOR<DonHangUpdateManyMutationInput, DonHangUncheckedUpdateManyWithoutNhanVienInput>
  }

  export type DonHangScalarWhereInput = {
    AND?: DonHangScalarWhereInput | DonHangScalarWhereInput[]
    OR?: DonHangScalarWhereInput[]
    NOT?: DonHangScalarWhereInput | DonHangScalarWhereInput[]
    maDH?: StringFilter<"DonHang"> | string
    maNV?: StringFilter<"DonHang"> | string
    ngayTao?: DateTimeFilter<"DonHang"> | Date | string
    tongTien?: DecimalFilter<"DonHang"> | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiDonHangFilter<"DonHang"> | $Enums.TrangThaiDonHang
  }

  export type GiaoDichKhoCreateWithoutKhoHangInput = {
    maGD?: string
    loaiGD: $Enums.LoaiGiaoDich
    thoiGian?: Date | string
    soLuong: number
    ghiChu?: string | null
    sach: SachCreateNestedOneWithoutGiaoDichKhoInput
    nhanVien: NhanVienCreateNestedOneWithoutGiaoDichKhoInput
  }

  export type GiaoDichKhoUncheckedCreateWithoutKhoHangInput = {
    maGD?: string
    maSach: string
    maNV: string
    loaiGD: $Enums.LoaiGiaoDich
    thoiGian?: Date | string
    soLuong: number
    ghiChu?: string | null
  }

  export type GiaoDichKhoCreateOrConnectWithoutKhoHangInput = {
    where: GiaoDichKhoWhereUniqueInput
    create: XOR<GiaoDichKhoCreateWithoutKhoHangInput, GiaoDichKhoUncheckedCreateWithoutKhoHangInput>
  }

  export type GiaoDichKhoCreateManyKhoHangInputEnvelope = {
    data: GiaoDichKhoCreateManyKhoHangInput | GiaoDichKhoCreateManyKhoHangInput[]
    skipDuplicates?: boolean
  }

  export type TonKhoCreateWithoutKhoHangInput = {
    soLuong?: number
    viTriKe?: string | null
    nguongMin?: number
    nguongMax?: number
    sach: SachCreateNestedOneWithoutTonKhoInput
  }

  export type TonKhoUncheckedCreateWithoutKhoHangInput = {
    maSach: string
    soLuong?: number
    viTriKe?: string | null
    nguongMin?: number
    nguongMax?: number
  }

  export type TonKhoCreateOrConnectWithoutKhoHangInput = {
    where: TonKhoWhereUniqueInput
    create: XOR<TonKhoCreateWithoutKhoHangInput, TonKhoUncheckedCreateWithoutKhoHangInput>
  }

  export type TonKhoCreateManyKhoHangInputEnvelope = {
    data: TonKhoCreateManyKhoHangInput | TonKhoCreateManyKhoHangInput[]
    skipDuplicates?: boolean
  }

  export type GiaoDichKhoUpsertWithWhereUniqueWithoutKhoHangInput = {
    where: GiaoDichKhoWhereUniqueInput
    update: XOR<GiaoDichKhoUpdateWithoutKhoHangInput, GiaoDichKhoUncheckedUpdateWithoutKhoHangInput>
    create: XOR<GiaoDichKhoCreateWithoutKhoHangInput, GiaoDichKhoUncheckedCreateWithoutKhoHangInput>
  }

  export type GiaoDichKhoUpdateWithWhereUniqueWithoutKhoHangInput = {
    where: GiaoDichKhoWhereUniqueInput
    data: XOR<GiaoDichKhoUpdateWithoutKhoHangInput, GiaoDichKhoUncheckedUpdateWithoutKhoHangInput>
  }

  export type GiaoDichKhoUpdateManyWithWhereWithoutKhoHangInput = {
    where: GiaoDichKhoScalarWhereInput
    data: XOR<GiaoDichKhoUpdateManyMutationInput, GiaoDichKhoUncheckedUpdateManyWithoutKhoHangInput>
  }

  export type TonKhoUpsertWithWhereUniqueWithoutKhoHangInput = {
    where: TonKhoWhereUniqueInput
    update: XOR<TonKhoUpdateWithoutKhoHangInput, TonKhoUncheckedUpdateWithoutKhoHangInput>
    create: XOR<TonKhoCreateWithoutKhoHangInput, TonKhoUncheckedCreateWithoutKhoHangInput>
  }

  export type TonKhoUpdateWithWhereUniqueWithoutKhoHangInput = {
    where: TonKhoWhereUniqueInput
    data: XOR<TonKhoUpdateWithoutKhoHangInput, TonKhoUncheckedUpdateWithoutKhoHangInput>
  }

  export type TonKhoUpdateManyWithWhereWithoutKhoHangInput = {
    where: TonKhoScalarWhereInput
    data: XOR<TonKhoUpdateManyMutationInput, TonKhoUncheckedUpdateManyWithoutKhoHangInput>
  }

  export type TonKhoScalarWhereInput = {
    AND?: TonKhoScalarWhereInput | TonKhoScalarWhereInput[]
    OR?: TonKhoScalarWhereInput[]
    NOT?: TonKhoScalarWhereInput | TonKhoScalarWhereInput[]
    maKho?: StringFilter<"TonKho"> | string
    maSach?: StringFilter<"TonKho"> | string
    soLuong?: IntFilter<"TonKho"> | number
    viTriKe?: StringNullableFilter<"TonKho"> | string | null
    nguongMin?: IntFilter<"TonKho"> | number
    nguongMax?: IntFilter<"TonKho"> | number
  }

  export type GiaoDichKhoCreateWithoutSachInput = {
    maGD?: string
    loaiGD: $Enums.LoaiGiaoDich
    thoiGian?: Date | string
    soLuong: number
    ghiChu?: string | null
    khoHang: KhoHangCreateNestedOneWithoutGiaoDichKhoInput
    nhanVien: NhanVienCreateNestedOneWithoutGiaoDichKhoInput
  }

  export type GiaoDichKhoUncheckedCreateWithoutSachInput = {
    maGD?: string
    maKho: string
    maNV: string
    loaiGD: $Enums.LoaiGiaoDich
    thoiGian?: Date | string
    soLuong: number
    ghiChu?: string | null
  }

  export type GiaoDichKhoCreateOrConnectWithoutSachInput = {
    where: GiaoDichKhoWhereUniqueInput
    create: XOR<GiaoDichKhoCreateWithoutSachInput, GiaoDichKhoUncheckedCreateWithoutSachInput>
  }

  export type GiaoDichKhoCreateManySachInputEnvelope = {
    data: GiaoDichKhoCreateManySachInput | GiaoDichKhoCreateManySachInput[]
    skipDuplicates?: boolean
  }

  export type TonKhoCreateWithoutSachInput = {
    soLuong?: number
    viTriKe?: string | null
    nguongMin?: number
    nguongMax?: number
    khoHang: KhoHangCreateNestedOneWithoutTonKhoInput
  }

  export type TonKhoUncheckedCreateWithoutSachInput = {
    maKho: string
    soLuong?: number
    viTriKe?: string | null
    nguongMin?: number
    nguongMax?: number
  }

  export type TonKhoCreateOrConnectWithoutSachInput = {
    where: TonKhoWhereUniqueInput
    create: XOR<TonKhoCreateWithoutSachInput, TonKhoUncheckedCreateWithoutSachInput>
  }

  export type TonKhoCreateManySachInputEnvelope = {
    data: TonKhoCreateManySachInput | TonKhoCreateManySachInput[]
    skipDuplicates?: boolean
  }

  export type ChiTietDonHangCreateWithoutSachInput = {
    soLuong: number
    donGia: Decimal | DecimalJsLike | number | string
    donHang: DonHangCreateNestedOneWithoutChiTietInput
  }

  export type ChiTietDonHangUncheckedCreateWithoutSachInput = {
    maDH: string
    soLuong: number
    donGia: Decimal | DecimalJsLike | number | string
  }

  export type ChiTietDonHangCreateOrConnectWithoutSachInput = {
    where: ChiTietDonHangWhereUniqueInput
    create: XOR<ChiTietDonHangCreateWithoutSachInput, ChiTietDonHangUncheckedCreateWithoutSachInput>
  }

  export type ChiTietDonHangCreateManySachInputEnvelope = {
    data: ChiTietDonHangCreateManySachInput | ChiTietDonHangCreateManySachInput[]
    skipDuplicates?: boolean
  }

  export type GiaoDichKhoUpsertWithWhereUniqueWithoutSachInput = {
    where: GiaoDichKhoWhereUniqueInput
    update: XOR<GiaoDichKhoUpdateWithoutSachInput, GiaoDichKhoUncheckedUpdateWithoutSachInput>
    create: XOR<GiaoDichKhoCreateWithoutSachInput, GiaoDichKhoUncheckedCreateWithoutSachInput>
  }

  export type GiaoDichKhoUpdateWithWhereUniqueWithoutSachInput = {
    where: GiaoDichKhoWhereUniqueInput
    data: XOR<GiaoDichKhoUpdateWithoutSachInput, GiaoDichKhoUncheckedUpdateWithoutSachInput>
  }

  export type GiaoDichKhoUpdateManyWithWhereWithoutSachInput = {
    where: GiaoDichKhoScalarWhereInput
    data: XOR<GiaoDichKhoUpdateManyMutationInput, GiaoDichKhoUncheckedUpdateManyWithoutSachInput>
  }

  export type TonKhoUpsertWithWhereUniqueWithoutSachInput = {
    where: TonKhoWhereUniqueInput
    update: XOR<TonKhoUpdateWithoutSachInput, TonKhoUncheckedUpdateWithoutSachInput>
    create: XOR<TonKhoCreateWithoutSachInput, TonKhoUncheckedCreateWithoutSachInput>
  }

  export type TonKhoUpdateWithWhereUniqueWithoutSachInput = {
    where: TonKhoWhereUniqueInput
    data: XOR<TonKhoUpdateWithoutSachInput, TonKhoUncheckedUpdateWithoutSachInput>
  }

  export type TonKhoUpdateManyWithWhereWithoutSachInput = {
    where: TonKhoScalarWhereInput
    data: XOR<TonKhoUpdateManyMutationInput, TonKhoUncheckedUpdateManyWithoutSachInput>
  }

  export type ChiTietDonHangUpsertWithWhereUniqueWithoutSachInput = {
    where: ChiTietDonHangWhereUniqueInput
    update: XOR<ChiTietDonHangUpdateWithoutSachInput, ChiTietDonHangUncheckedUpdateWithoutSachInput>
    create: XOR<ChiTietDonHangCreateWithoutSachInput, ChiTietDonHangUncheckedCreateWithoutSachInput>
  }

  export type ChiTietDonHangUpdateWithWhereUniqueWithoutSachInput = {
    where: ChiTietDonHangWhereUniqueInput
    data: XOR<ChiTietDonHangUpdateWithoutSachInput, ChiTietDonHangUncheckedUpdateWithoutSachInput>
  }

  export type ChiTietDonHangUpdateManyWithWhereWithoutSachInput = {
    where: ChiTietDonHangScalarWhereInput
    data: XOR<ChiTietDonHangUpdateManyMutationInput, ChiTietDonHangUncheckedUpdateManyWithoutSachInput>
  }

  export type ChiTietDonHangScalarWhereInput = {
    AND?: ChiTietDonHangScalarWhereInput | ChiTietDonHangScalarWhereInput[]
    OR?: ChiTietDonHangScalarWhereInput[]
    NOT?: ChiTietDonHangScalarWhereInput | ChiTietDonHangScalarWhereInput[]
    maDH?: StringFilter<"ChiTietDonHang"> | string
    maSach?: StringFilter<"ChiTietDonHang"> | string
    soLuong?: IntFilter<"ChiTietDonHang"> | number
    donGia?: DecimalFilter<"ChiTietDonHang"> | Decimal | DecimalJsLike | number | string
  }

  export type KhoHangCreateWithoutGiaoDichKhoInput = {
    maKho?: string
    tenKho: string
    diaChi: string
    sdt?: string | null
    tonKho?: TonKhoCreateNestedManyWithoutKhoHangInput
  }

  export type KhoHangUncheckedCreateWithoutGiaoDichKhoInput = {
    maKho?: string
    tenKho: string
    diaChi: string
    sdt?: string | null
    tonKho?: TonKhoUncheckedCreateNestedManyWithoutKhoHangInput
  }

  export type KhoHangCreateOrConnectWithoutGiaoDichKhoInput = {
    where: KhoHangWhereUniqueInput
    create: XOR<KhoHangCreateWithoutGiaoDichKhoInput, KhoHangUncheckedCreateWithoutGiaoDichKhoInput>
  }

  export type SachCreateWithoutGiaoDichKhoInput = {
    maSach?: string
    tenSach: string
    tacGia: string
    nxb: string
    giaNhap: Decimal | DecimalJsLike | number | string
    giaSach: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiSach
    anhBia?: string | null
    tonKho?: TonKhoCreateNestedManyWithoutSachInput
    chiTietDonHang?: ChiTietDonHangCreateNestedManyWithoutSachInput
  }

  export type SachUncheckedCreateWithoutGiaoDichKhoInput = {
    maSach?: string
    tenSach: string
    tacGia: string
    nxb: string
    giaNhap: Decimal | DecimalJsLike | number | string
    giaSach: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiSach
    anhBia?: string | null
    tonKho?: TonKhoUncheckedCreateNestedManyWithoutSachInput
    chiTietDonHang?: ChiTietDonHangUncheckedCreateNestedManyWithoutSachInput
  }

  export type SachCreateOrConnectWithoutGiaoDichKhoInput = {
    where: SachWhereUniqueInput
    create: XOR<SachCreateWithoutGiaoDichKhoInput, SachUncheckedCreateWithoutGiaoDichKhoInput>
  }

  export type NhanVienCreateWithoutGiaoDichKhoInput = {
    maNV?: string
    matKhau: string
    hoTen: string
    chucVu: $Enums.ChucVu
    donHang?: DonHangCreateNestedManyWithoutNhanVienInput
  }

  export type NhanVienUncheckedCreateWithoutGiaoDichKhoInput = {
    maNV?: string
    matKhau: string
    hoTen: string
    chucVu: $Enums.ChucVu
    donHang?: DonHangUncheckedCreateNestedManyWithoutNhanVienInput
  }

  export type NhanVienCreateOrConnectWithoutGiaoDichKhoInput = {
    where: NhanVienWhereUniqueInput
    create: XOR<NhanVienCreateWithoutGiaoDichKhoInput, NhanVienUncheckedCreateWithoutGiaoDichKhoInput>
  }

  export type KhoHangUpsertWithoutGiaoDichKhoInput = {
    update: XOR<KhoHangUpdateWithoutGiaoDichKhoInput, KhoHangUncheckedUpdateWithoutGiaoDichKhoInput>
    create: XOR<KhoHangCreateWithoutGiaoDichKhoInput, KhoHangUncheckedCreateWithoutGiaoDichKhoInput>
    where?: KhoHangWhereInput
  }

  export type KhoHangUpdateToOneWithWhereWithoutGiaoDichKhoInput = {
    where?: KhoHangWhereInput
    data: XOR<KhoHangUpdateWithoutGiaoDichKhoInput, KhoHangUncheckedUpdateWithoutGiaoDichKhoInput>
  }

  export type KhoHangUpdateWithoutGiaoDichKhoInput = {
    maKho?: StringFieldUpdateOperationsInput | string
    tenKho?: StringFieldUpdateOperationsInput | string
    diaChi?: StringFieldUpdateOperationsInput | string
    sdt?: NullableStringFieldUpdateOperationsInput | string | null
    tonKho?: TonKhoUpdateManyWithoutKhoHangNestedInput
  }

  export type KhoHangUncheckedUpdateWithoutGiaoDichKhoInput = {
    maKho?: StringFieldUpdateOperationsInput | string
    tenKho?: StringFieldUpdateOperationsInput | string
    diaChi?: StringFieldUpdateOperationsInput | string
    sdt?: NullableStringFieldUpdateOperationsInput | string | null
    tonKho?: TonKhoUncheckedUpdateManyWithoutKhoHangNestedInput
  }

  export type SachUpsertWithoutGiaoDichKhoInput = {
    update: XOR<SachUpdateWithoutGiaoDichKhoInput, SachUncheckedUpdateWithoutGiaoDichKhoInput>
    create: XOR<SachCreateWithoutGiaoDichKhoInput, SachUncheckedCreateWithoutGiaoDichKhoInput>
    where?: SachWhereInput
  }

  export type SachUpdateToOneWithWhereWithoutGiaoDichKhoInput = {
    where?: SachWhereInput
    data: XOR<SachUpdateWithoutGiaoDichKhoInput, SachUncheckedUpdateWithoutGiaoDichKhoInput>
  }

  export type SachUpdateWithoutGiaoDichKhoInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    tenSach?: StringFieldUpdateOperationsInput | string
    tacGia?: StringFieldUpdateOperationsInput | string
    nxb?: StringFieldUpdateOperationsInput | string
    giaNhap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    giaSach?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiSachFieldUpdateOperationsInput | $Enums.TrangThaiSach
    anhBia?: NullableStringFieldUpdateOperationsInput | string | null
    tonKho?: TonKhoUpdateManyWithoutSachNestedInput
    chiTietDonHang?: ChiTietDonHangUpdateManyWithoutSachNestedInput
  }

  export type SachUncheckedUpdateWithoutGiaoDichKhoInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    tenSach?: StringFieldUpdateOperationsInput | string
    tacGia?: StringFieldUpdateOperationsInput | string
    nxb?: StringFieldUpdateOperationsInput | string
    giaNhap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    giaSach?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiSachFieldUpdateOperationsInput | $Enums.TrangThaiSach
    anhBia?: NullableStringFieldUpdateOperationsInput | string | null
    tonKho?: TonKhoUncheckedUpdateManyWithoutSachNestedInput
    chiTietDonHang?: ChiTietDonHangUncheckedUpdateManyWithoutSachNestedInput
  }

  export type NhanVienUpsertWithoutGiaoDichKhoInput = {
    update: XOR<NhanVienUpdateWithoutGiaoDichKhoInput, NhanVienUncheckedUpdateWithoutGiaoDichKhoInput>
    create: XOR<NhanVienCreateWithoutGiaoDichKhoInput, NhanVienUncheckedCreateWithoutGiaoDichKhoInput>
    where?: NhanVienWhereInput
  }

  export type NhanVienUpdateToOneWithWhereWithoutGiaoDichKhoInput = {
    where?: NhanVienWhereInput
    data: XOR<NhanVienUpdateWithoutGiaoDichKhoInput, NhanVienUncheckedUpdateWithoutGiaoDichKhoInput>
  }

  export type NhanVienUpdateWithoutGiaoDichKhoInput = {
    maNV?: StringFieldUpdateOperationsInput | string
    matKhau?: StringFieldUpdateOperationsInput | string
    hoTen?: StringFieldUpdateOperationsInput | string
    chucVu?: EnumChucVuFieldUpdateOperationsInput | $Enums.ChucVu
    donHang?: DonHangUpdateManyWithoutNhanVienNestedInput
  }

  export type NhanVienUncheckedUpdateWithoutGiaoDichKhoInput = {
    maNV?: StringFieldUpdateOperationsInput | string
    matKhau?: StringFieldUpdateOperationsInput | string
    hoTen?: StringFieldUpdateOperationsInput | string
    chucVu?: EnumChucVuFieldUpdateOperationsInput | $Enums.ChucVu
    donHang?: DonHangUncheckedUpdateManyWithoutNhanVienNestedInput
  }

  export type KhoHangCreateWithoutTonKhoInput = {
    maKho?: string
    tenKho: string
    diaChi: string
    sdt?: string | null
    giaoDichKho?: GiaoDichKhoCreateNestedManyWithoutKhoHangInput
  }

  export type KhoHangUncheckedCreateWithoutTonKhoInput = {
    maKho?: string
    tenKho: string
    diaChi: string
    sdt?: string | null
    giaoDichKho?: GiaoDichKhoUncheckedCreateNestedManyWithoutKhoHangInput
  }

  export type KhoHangCreateOrConnectWithoutTonKhoInput = {
    where: KhoHangWhereUniqueInput
    create: XOR<KhoHangCreateWithoutTonKhoInput, KhoHangUncheckedCreateWithoutTonKhoInput>
  }

  export type SachCreateWithoutTonKhoInput = {
    maSach?: string
    tenSach: string
    tacGia: string
    nxb: string
    giaNhap: Decimal | DecimalJsLike | number | string
    giaSach: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiSach
    anhBia?: string | null
    giaoDichKho?: GiaoDichKhoCreateNestedManyWithoutSachInput
    chiTietDonHang?: ChiTietDonHangCreateNestedManyWithoutSachInput
  }

  export type SachUncheckedCreateWithoutTonKhoInput = {
    maSach?: string
    tenSach: string
    tacGia: string
    nxb: string
    giaNhap: Decimal | DecimalJsLike | number | string
    giaSach: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiSach
    anhBia?: string | null
    giaoDichKho?: GiaoDichKhoUncheckedCreateNestedManyWithoutSachInput
    chiTietDonHang?: ChiTietDonHangUncheckedCreateNestedManyWithoutSachInput
  }

  export type SachCreateOrConnectWithoutTonKhoInput = {
    where: SachWhereUniqueInput
    create: XOR<SachCreateWithoutTonKhoInput, SachUncheckedCreateWithoutTonKhoInput>
  }

  export type KhoHangUpsertWithoutTonKhoInput = {
    update: XOR<KhoHangUpdateWithoutTonKhoInput, KhoHangUncheckedUpdateWithoutTonKhoInput>
    create: XOR<KhoHangCreateWithoutTonKhoInput, KhoHangUncheckedCreateWithoutTonKhoInput>
    where?: KhoHangWhereInput
  }

  export type KhoHangUpdateToOneWithWhereWithoutTonKhoInput = {
    where?: KhoHangWhereInput
    data: XOR<KhoHangUpdateWithoutTonKhoInput, KhoHangUncheckedUpdateWithoutTonKhoInput>
  }

  export type KhoHangUpdateWithoutTonKhoInput = {
    maKho?: StringFieldUpdateOperationsInput | string
    tenKho?: StringFieldUpdateOperationsInput | string
    diaChi?: StringFieldUpdateOperationsInput | string
    sdt?: NullableStringFieldUpdateOperationsInput | string | null
    giaoDichKho?: GiaoDichKhoUpdateManyWithoutKhoHangNestedInput
  }

  export type KhoHangUncheckedUpdateWithoutTonKhoInput = {
    maKho?: StringFieldUpdateOperationsInput | string
    tenKho?: StringFieldUpdateOperationsInput | string
    diaChi?: StringFieldUpdateOperationsInput | string
    sdt?: NullableStringFieldUpdateOperationsInput | string | null
    giaoDichKho?: GiaoDichKhoUncheckedUpdateManyWithoutKhoHangNestedInput
  }

  export type SachUpsertWithoutTonKhoInput = {
    update: XOR<SachUpdateWithoutTonKhoInput, SachUncheckedUpdateWithoutTonKhoInput>
    create: XOR<SachCreateWithoutTonKhoInput, SachUncheckedCreateWithoutTonKhoInput>
    where?: SachWhereInput
  }

  export type SachUpdateToOneWithWhereWithoutTonKhoInput = {
    where?: SachWhereInput
    data: XOR<SachUpdateWithoutTonKhoInput, SachUncheckedUpdateWithoutTonKhoInput>
  }

  export type SachUpdateWithoutTonKhoInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    tenSach?: StringFieldUpdateOperationsInput | string
    tacGia?: StringFieldUpdateOperationsInput | string
    nxb?: StringFieldUpdateOperationsInput | string
    giaNhap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    giaSach?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiSachFieldUpdateOperationsInput | $Enums.TrangThaiSach
    anhBia?: NullableStringFieldUpdateOperationsInput | string | null
    giaoDichKho?: GiaoDichKhoUpdateManyWithoutSachNestedInput
    chiTietDonHang?: ChiTietDonHangUpdateManyWithoutSachNestedInput
  }

  export type SachUncheckedUpdateWithoutTonKhoInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    tenSach?: StringFieldUpdateOperationsInput | string
    tacGia?: StringFieldUpdateOperationsInput | string
    nxb?: StringFieldUpdateOperationsInput | string
    giaNhap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    giaSach?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiSachFieldUpdateOperationsInput | $Enums.TrangThaiSach
    anhBia?: NullableStringFieldUpdateOperationsInput | string | null
    giaoDichKho?: GiaoDichKhoUncheckedUpdateManyWithoutSachNestedInput
    chiTietDonHang?: ChiTietDonHangUncheckedUpdateManyWithoutSachNestedInput
  }

  export type NhanVienCreateWithoutDonHangInput = {
    maNV?: string
    matKhau: string
    hoTen: string
    chucVu: $Enums.ChucVu
    giaoDichKho?: GiaoDichKhoCreateNestedManyWithoutNhanVienInput
  }

  export type NhanVienUncheckedCreateWithoutDonHangInput = {
    maNV?: string
    matKhau: string
    hoTen: string
    chucVu: $Enums.ChucVu
    giaoDichKho?: GiaoDichKhoUncheckedCreateNestedManyWithoutNhanVienInput
  }

  export type NhanVienCreateOrConnectWithoutDonHangInput = {
    where: NhanVienWhereUniqueInput
    create: XOR<NhanVienCreateWithoutDonHangInput, NhanVienUncheckedCreateWithoutDonHangInput>
  }

  export type ChiTietDonHangCreateWithoutDonHangInput = {
    soLuong: number
    donGia: Decimal | DecimalJsLike | number | string
    sach: SachCreateNestedOneWithoutChiTietDonHangInput
  }

  export type ChiTietDonHangUncheckedCreateWithoutDonHangInput = {
    maSach: string
    soLuong: number
    donGia: Decimal | DecimalJsLike | number | string
  }

  export type ChiTietDonHangCreateOrConnectWithoutDonHangInput = {
    where: ChiTietDonHangWhereUniqueInput
    create: XOR<ChiTietDonHangCreateWithoutDonHangInput, ChiTietDonHangUncheckedCreateWithoutDonHangInput>
  }

  export type ChiTietDonHangCreateManyDonHangInputEnvelope = {
    data: ChiTietDonHangCreateManyDonHangInput | ChiTietDonHangCreateManyDonHangInput[]
    skipDuplicates?: boolean
  }

  export type NhanVienUpsertWithoutDonHangInput = {
    update: XOR<NhanVienUpdateWithoutDonHangInput, NhanVienUncheckedUpdateWithoutDonHangInput>
    create: XOR<NhanVienCreateWithoutDonHangInput, NhanVienUncheckedCreateWithoutDonHangInput>
    where?: NhanVienWhereInput
  }

  export type NhanVienUpdateToOneWithWhereWithoutDonHangInput = {
    where?: NhanVienWhereInput
    data: XOR<NhanVienUpdateWithoutDonHangInput, NhanVienUncheckedUpdateWithoutDonHangInput>
  }

  export type NhanVienUpdateWithoutDonHangInput = {
    maNV?: StringFieldUpdateOperationsInput | string
    matKhau?: StringFieldUpdateOperationsInput | string
    hoTen?: StringFieldUpdateOperationsInput | string
    chucVu?: EnumChucVuFieldUpdateOperationsInput | $Enums.ChucVu
    giaoDichKho?: GiaoDichKhoUpdateManyWithoutNhanVienNestedInput
  }

  export type NhanVienUncheckedUpdateWithoutDonHangInput = {
    maNV?: StringFieldUpdateOperationsInput | string
    matKhau?: StringFieldUpdateOperationsInput | string
    hoTen?: StringFieldUpdateOperationsInput | string
    chucVu?: EnumChucVuFieldUpdateOperationsInput | $Enums.ChucVu
    giaoDichKho?: GiaoDichKhoUncheckedUpdateManyWithoutNhanVienNestedInput
  }

  export type ChiTietDonHangUpsertWithWhereUniqueWithoutDonHangInput = {
    where: ChiTietDonHangWhereUniqueInput
    update: XOR<ChiTietDonHangUpdateWithoutDonHangInput, ChiTietDonHangUncheckedUpdateWithoutDonHangInput>
    create: XOR<ChiTietDonHangCreateWithoutDonHangInput, ChiTietDonHangUncheckedCreateWithoutDonHangInput>
  }

  export type ChiTietDonHangUpdateWithWhereUniqueWithoutDonHangInput = {
    where: ChiTietDonHangWhereUniqueInput
    data: XOR<ChiTietDonHangUpdateWithoutDonHangInput, ChiTietDonHangUncheckedUpdateWithoutDonHangInput>
  }

  export type ChiTietDonHangUpdateManyWithWhereWithoutDonHangInput = {
    where: ChiTietDonHangScalarWhereInput
    data: XOR<ChiTietDonHangUpdateManyMutationInput, ChiTietDonHangUncheckedUpdateManyWithoutDonHangInput>
  }

  export type DonHangCreateWithoutChiTietInput = {
    maDH?: string
    ngayTao?: Date | string
    tongTien?: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiDonHang
    nhanVien: NhanVienCreateNestedOneWithoutDonHangInput
  }

  export type DonHangUncheckedCreateWithoutChiTietInput = {
    maDH?: string
    maNV: string
    ngayTao?: Date | string
    tongTien?: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiDonHang
  }

  export type DonHangCreateOrConnectWithoutChiTietInput = {
    where: DonHangWhereUniqueInput
    create: XOR<DonHangCreateWithoutChiTietInput, DonHangUncheckedCreateWithoutChiTietInput>
  }

  export type SachCreateWithoutChiTietDonHangInput = {
    maSach?: string
    tenSach: string
    tacGia: string
    nxb: string
    giaNhap: Decimal | DecimalJsLike | number | string
    giaSach: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiSach
    anhBia?: string | null
    giaoDichKho?: GiaoDichKhoCreateNestedManyWithoutSachInput
    tonKho?: TonKhoCreateNestedManyWithoutSachInput
  }

  export type SachUncheckedCreateWithoutChiTietDonHangInput = {
    maSach?: string
    tenSach: string
    tacGia: string
    nxb: string
    giaNhap: Decimal | DecimalJsLike | number | string
    giaSach: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiSach
    anhBia?: string | null
    giaoDichKho?: GiaoDichKhoUncheckedCreateNestedManyWithoutSachInput
    tonKho?: TonKhoUncheckedCreateNestedManyWithoutSachInput
  }

  export type SachCreateOrConnectWithoutChiTietDonHangInput = {
    where: SachWhereUniqueInput
    create: XOR<SachCreateWithoutChiTietDonHangInput, SachUncheckedCreateWithoutChiTietDonHangInput>
  }

  export type DonHangUpsertWithoutChiTietInput = {
    update: XOR<DonHangUpdateWithoutChiTietInput, DonHangUncheckedUpdateWithoutChiTietInput>
    create: XOR<DonHangCreateWithoutChiTietInput, DonHangUncheckedCreateWithoutChiTietInput>
    where?: DonHangWhereInput
  }

  export type DonHangUpdateToOneWithWhereWithoutChiTietInput = {
    where?: DonHangWhereInput
    data: XOR<DonHangUpdateWithoutChiTietInput, DonHangUncheckedUpdateWithoutChiTietInput>
  }

  export type DonHangUpdateWithoutChiTietInput = {
    maDH?: StringFieldUpdateOperationsInput | string
    ngayTao?: DateTimeFieldUpdateOperationsInput | Date | string
    tongTien?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiDonHangFieldUpdateOperationsInput | $Enums.TrangThaiDonHang
    nhanVien?: NhanVienUpdateOneRequiredWithoutDonHangNestedInput
  }

  export type DonHangUncheckedUpdateWithoutChiTietInput = {
    maDH?: StringFieldUpdateOperationsInput | string
    maNV?: StringFieldUpdateOperationsInput | string
    ngayTao?: DateTimeFieldUpdateOperationsInput | Date | string
    tongTien?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiDonHangFieldUpdateOperationsInput | $Enums.TrangThaiDonHang
  }

  export type SachUpsertWithoutChiTietDonHangInput = {
    update: XOR<SachUpdateWithoutChiTietDonHangInput, SachUncheckedUpdateWithoutChiTietDonHangInput>
    create: XOR<SachCreateWithoutChiTietDonHangInput, SachUncheckedCreateWithoutChiTietDonHangInput>
    where?: SachWhereInput
  }

  export type SachUpdateToOneWithWhereWithoutChiTietDonHangInput = {
    where?: SachWhereInput
    data: XOR<SachUpdateWithoutChiTietDonHangInput, SachUncheckedUpdateWithoutChiTietDonHangInput>
  }

  export type SachUpdateWithoutChiTietDonHangInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    tenSach?: StringFieldUpdateOperationsInput | string
    tacGia?: StringFieldUpdateOperationsInput | string
    nxb?: StringFieldUpdateOperationsInput | string
    giaNhap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    giaSach?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiSachFieldUpdateOperationsInput | $Enums.TrangThaiSach
    anhBia?: NullableStringFieldUpdateOperationsInput | string | null
    giaoDichKho?: GiaoDichKhoUpdateManyWithoutSachNestedInput
    tonKho?: TonKhoUpdateManyWithoutSachNestedInput
  }

  export type SachUncheckedUpdateWithoutChiTietDonHangInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    tenSach?: StringFieldUpdateOperationsInput | string
    tacGia?: StringFieldUpdateOperationsInput | string
    nxb?: StringFieldUpdateOperationsInput | string
    giaNhap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    giaSach?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiSachFieldUpdateOperationsInput | $Enums.TrangThaiSach
    anhBia?: NullableStringFieldUpdateOperationsInput | string | null
    giaoDichKho?: GiaoDichKhoUncheckedUpdateManyWithoutSachNestedInput
    tonKho?: TonKhoUncheckedUpdateManyWithoutSachNestedInput
  }

  export type GiaoDichKhoCreateManyNhanVienInput = {
    maGD?: string
    maKho: string
    maSach: string
    loaiGD: $Enums.LoaiGiaoDich
    thoiGian?: Date | string
    soLuong: number
    ghiChu?: string | null
  }

  export type DonHangCreateManyNhanVienInput = {
    maDH?: string
    ngayTao?: Date | string
    tongTien?: Decimal | DecimalJsLike | number | string
    trangThai?: $Enums.TrangThaiDonHang
  }

  export type GiaoDichKhoUpdateWithoutNhanVienInput = {
    maGD?: StringFieldUpdateOperationsInput | string
    loaiGD?: EnumLoaiGiaoDichFieldUpdateOperationsInput | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFieldUpdateOperationsInput | Date | string
    soLuong?: IntFieldUpdateOperationsInput | number
    ghiChu?: NullableStringFieldUpdateOperationsInput | string | null
    khoHang?: KhoHangUpdateOneRequiredWithoutGiaoDichKhoNestedInput
    sach?: SachUpdateOneRequiredWithoutGiaoDichKhoNestedInput
  }

  export type GiaoDichKhoUncheckedUpdateWithoutNhanVienInput = {
    maGD?: StringFieldUpdateOperationsInput | string
    maKho?: StringFieldUpdateOperationsInput | string
    maSach?: StringFieldUpdateOperationsInput | string
    loaiGD?: EnumLoaiGiaoDichFieldUpdateOperationsInput | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFieldUpdateOperationsInput | Date | string
    soLuong?: IntFieldUpdateOperationsInput | number
    ghiChu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GiaoDichKhoUncheckedUpdateManyWithoutNhanVienInput = {
    maGD?: StringFieldUpdateOperationsInput | string
    maKho?: StringFieldUpdateOperationsInput | string
    maSach?: StringFieldUpdateOperationsInput | string
    loaiGD?: EnumLoaiGiaoDichFieldUpdateOperationsInput | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFieldUpdateOperationsInput | Date | string
    soLuong?: IntFieldUpdateOperationsInput | number
    ghiChu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonHangUpdateWithoutNhanVienInput = {
    maDH?: StringFieldUpdateOperationsInput | string
    ngayTao?: DateTimeFieldUpdateOperationsInput | Date | string
    tongTien?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiDonHangFieldUpdateOperationsInput | $Enums.TrangThaiDonHang
    chiTiet?: ChiTietDonHangUpdateManyWithoutDonHangNestedInput
  }

  export type DonHangUncheckedUpdateWithoutNhanVienInput = {
    maDH?: StringFieldUpdateOperationsInput | string
    ngayTao?: DateTimeFieldUpdateOperationsInput | Date | string
    tongTien?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiDonHangFieldUpdateOperationsInput | $Enums.TrangThaiDonHang
    chiTiet?: ChiTietDonHangUncheckedUpdateManyWithoutDonHangNestedInput
  }

  export type DonHangUncheckedUpdateManyWithoutNhanVienInput = {
    maDH?: StringFieldUpdateOperationsInput | string
    ngayTao?: DateTimeFieldUpdateOperationsInput | Date | string
    tongTien?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trangThai?: EnumTrangThaiDonHangFieldUpdateOperationsInput | $Enums.TrangThaiDonHang
  }

  export type GiaoDichKhoCreateManyKhoHangInput = {
    maGD?: string
    maSach: string
    maNV: string
    loaiGD: $Enums.LoaiGiaoDich
    thoiGian?: Date | string
    soLuong: number
    ghiChu?: string | null
  }

  export type TonKhoCreateManyKhoHangInput = {
    maSach: string
    soLuong?: number
    viTriKe?: string | null
    nguongMin?: number
    nguongMax?: number
  }

  export type GiaoDichKhoUpdateWithoutKhoHangInput = {
    maGD?: StringFieldUpdateOperationsInput | string
    loaiGD?: EnumLoaiGiaoDichFieldUpdateOperationsInput | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFieldUpdateOperationsInput | Date | string
    soLuong?: IntFieldUpdateOperationsInput | number
    ghiChu?: NullableStringFieldUpdateOperationsInput | string | null
    sach?: SachUpdateOneRequiredWithoutGiaoDichKhoNestedInput
    nhanVien?: NhanVienUpdateOneRequiredWithoutGiaoDichKhoNestedInput
  }

  export type GiaoDichKhoUncheckedUpdateWithoutKhoHangInput = {
    maGD?: StringFieldUpdateOperationsInput | string
    maSach?: StringFieldUpdateOperationsInput | string
    maNV?: StringFieldUpdateOperationsInput | string
    loaiGD?: EnumLoaiGiaoDichFieldUpdateOperationsInput | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFieldUpdateOperationsInput | Date | string
    soLuong?: IntFieldUpdateOperationsInput | number
    ghiChu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GiaoDichKhoUncheckedUpdateManyWithoutKhoHangInput = {
    maGD?: StringFieldUpdateOperationsInput | string
    maSach?: StringFieldUpdateOperationsInput | string
    maNV?: StringFieldUpdateOperationsInput | string
    loaiGD?: EnumLoaiGiaoDichFieldUpdateOperationsInput | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFieldUpdateOperationsInput | Date | string
    soLuong?: IntFieldUpdateOperationsInput | number
    ghiChu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TonKhoUpdateWithoutKhoHangInput = {
    soLuong?: IntFieldUpdateOperationsInput | number
    viTriKe?: NullableStringFieldUpdateOperationsInput | string | null
    nguongMin?: IntFieldUpdateOperationsInput | number
    nguongMax?: IntFieldUpdateOperationsInput | number
    sach?: SachUpdateOneRequiredWithoutTonKhoNestedInput
  }

  export type TonKhoUncheckedUpdateWithoutKhoHangInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    soLuong?: IntFieldUpdateOperationsInput | number
    viTriKe?: NullableStringFieldUpdateOperationsInput | string | null
    nguongMin?: IntFieldUpdateOperationsInput | number
    nguongMax?: IntFieldUpdateOperationsInput | number
  }

  export type TonKhoUncheckedUpdateManyWithoutKhoHangInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    soLuong?: IntFieldUpdateOperationsInput | number
    viTriKe?: NullableStringFieldUpdateOperationsInput | string | null
    nguongMin?: IntFieldUpdateOperationsInput | number
    nguongMax?: IntFieldUpdateOperationsInput | number
  }

  export type GiaoDichKhoCreateManySachInput = {
    maGD?: string
    maKho: string
    maNV: string
    loaiGD: $Enums.LoaiGiaoDich
    thoiGian?: Date | string
    soLuong: number
    ghiChu?: string | null
  }

  export type TonKhoCreateManySachInput = {
    maKho: string
    soLuong?: number
    viTriKe?: string | null
    nguongMin?: number
    nguongMax?: number
  }

  export type ChiTietDonHangCreateManySachInput = {
    maDH: string
    soLuong: number
    donGia: Decimal | DecimalJsLike | number | string
  }

  export type GiaoDichKhoUpdateWithoutSachInput = {
    maGD?: StringFieldUpdateOperationsInput | string
    loaiGD?: EnumLoaiGiaoDichFieldUpdateOperationsInput | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFieldUpdateOperationsInput | Date | string
    soLuong?: IntFieldUpdateOperationsInput | number
    ghiChu?: NullableStringFieldUpdateOperationsInput | string | null
    khoHang?: KhoHangUpdateOneRequiredWithoutGiaoDichKhoNestedInput
    nhanVien?: NhanVienUpdateOneRequiredWithoutGiaoDichKhoNestedInput
  }

  export type GiaoDichKhoUncheckedUpdateWithoutSachInput = {
    maGD?: StringFieldUpdateOperationsInput | string
    maKho?: StringFieldUpdateOperationsInput | string
    maNV?: StringFieldUpdateOperationsInput | string
    loaiGD?: EnumLoaiGiaoDichFieldUpdateOperationsInput | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFieldUpdateOperationsInput | Date | string
    soLuong?: IntFieldUpdateOperationsInput | number
    ghiChu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GiaoDichKhoUncheckedUpdateManyWithoutSachInput = {
    maGD?: StringFieldUpdateOperationsInput | string
    maKho?: StringFieldUpdateOperationsInput | string
    maNV?: StringFieldUpdateOperationsInput | string
    loaiGD?: EnumLoaiGiaoDichFieldUpdateOperationsInput | $Enums.LoaiGiaoDich
    thoiGian?: DateTimeFieldUpdateOperationsInput | Date | string
    soLuong?: IntFieldUpdateOperationsInput | number
    ghiChu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TonKhoUpdateWithoutSachInput = {
    soLuong?: IntFieldUpdateOperationsInput | number
    viTriKe?: NullableStringFieldUpdateOperationsInput | string | null
    nguongMin?: IntFieldUpdateOperationsInput | number
    nguongMax?: IntFieldUpdateOperationsInput | number
    khoHang?: KhoHangUpdateOneRequiredWithoutTonKhoNestedInput
  }

  export type TonKhoUncheckedUpdateWithoutSachInput = {
    maKho?: StringFieldUpdateOperationsInput | string
    soLuong?: IntFieldUpdateOperationsInput | number
    viTriKe?: NullableStringFieldUpdateOperationsInput | string | null
    nguongMin?: IntFieldUpdateOperationsInput | number
    nguongMax?: IntFieldUpdateOperationsInput | number
  }

  export type TonKhoUncheckedUpdateManyWithoutSachInput = {
    maKho?: StringFieldUpdateOperationsInput | string
    soLuong?: IntFieldUpdateOperationsInput | number
    viTriKe?: NullableStringFieldUpdateOperationsInput | string | null
    nguongMin?: IntFieldUpdateOperationsInput | number
    nguongMax?: IntFieldUpdateOperationsInput | number
  }

  export type ChiTietDonHangUpdateWithoutSachInput = {
    soLuong?: IntFieldUpdateOperationsInput | number
    donGia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donHang?: DonHangUpdateOneRequiredWithoutChiTietNestedInput
  }

  export type ChiTietDonHangUncheckedUpdateWithoutSachInput = {
    maDH?: StringFieldUpdateOperationsInput | string
    soLuong?: IntFieldUpdateOperationsInput | number
    donGia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ChiTietDonHangUncheckedUpdateManyWithoutSachInput = {
    maDH?: StringFieldUpdateOperationsInput | string
    soLuong?: IntFieldUpdateOperationsInput | number
    donGia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ChiTietDonHangCreateManyDonHangInput = {
    maSach: string
    soLuong: number
    donGia: Decimal | DecimalJsLike | number | string
  }

  export type ChiTietDonHangUpdateWithoutDonHangInput = {
    soLuong?: IntFieldUpdateOperationsInput | number
    donGia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sach?: SachUpdateOneRequiredWithoutChiTietDonHangNestedInput
  }

  export type ChiTietDonHangUncheckedUpdateWithoutDonHangInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    soLuong?: IntFieldUpdateOperationsInput | number
    donGia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ChiTietDonHangUncheckedUpdateManyWithoutDonHangInput = {
    maSach?: StringFieldUpdateOperationsInput | string
    soLuong?: IntFieldUpdateOperationsInput | number
    donGia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}