
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model Tzadik
 * 
 */
export type Tzadik = $Result.DefaultSelection<Prisma.$TzadikPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  male: 'male',
  female: 'female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Communities
 * const communities = await prisma.community.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Communities
   * const communities = await prisma.community.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tzadik`: Exposes CRUD operations for the **Tzadik** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tzadiks
    * const tzadiks = await prisma.tzadik.findMany()
    * ```
    */
  get tzadik(): Prisma.TzadikDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Community: 'Community',
    Tzadik: 'Tzadik'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "community" | "tzadik"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      Tzadik: {
        payload: Prisma.$TzadikPayload<ExtArgs>
        fields: Prisma.TzadikFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TzadikFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TzadikPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TzadikFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TzadikPayload>
          }
          findFirst: {
            args: Prisma.TzadikFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TzadikPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TzadikFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TzadikPayload>
          }
          findMany: {
            args: Prisma.TzadikFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TzadikPayload>[]
          }
          create: {
            args: Prisma.TzadikCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TzadikPayload>
          }
          createMany: {
            args: Prisma.TzadikCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TzadikCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TzadikPayload>[]
          }
          delete: {
            args: Prisma.TzadikDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TzadikPayload>
          }
          update: {
            args: Prisma.TzadikUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TzadikPayload>
          }
          deleteMany: {
            args: Prisma.TzadikDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TzadikUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TzadikUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TzadikPayload>[]
          }
          upsert: {
            args: Prisma.TzadikUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TzadikPayload>
          }
          aggregate: {
            args: Prisma.TzadikAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTzadik>
          }
          groupBy: {
            args: Prisma.TzadikGroupByArgs<ExtArgs>
            result: $Utils.Optional<TzadikGroupByOutputType>[]
          }
          count: {
            args: Prisma.TzadikCountArgs<ExtArgs>
            result: $Utils.Optional<TzadikCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    community?: CommunityOmit
    tzadik?: TzadikOmit
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
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    tzadikim: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tzadikim?: boolean | CommunityCountOutputTypeCountTzadikimArgs
  }

  // Custom InputTypes
  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountTzadikimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TzadikWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityAvgAggregateOutputType = {
    id: number | null
  }

  export type CommunitySumAggregateOutputType = {
    id: number | null
  }

  export type CommunityMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CommunityAvgAggregateInputType = {
    id?: true
  }

  export type CommunitySumAggregateInputType = {
    id?: true
  }

  export type CommunityMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _avg?: CommunityAvgAggregateInputType
    _sum?: CommunitySumAggregateInputType
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: number
    name: string
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tzadikim?: boolean | Community$tzadikimArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CommunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["community"]>
  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tzadikim?: boolean | Community$tzadikimArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CommunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      tzadikim: Prisma.$TzadikPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["community"]>
    composites: {}
  }

  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityFindUniqueArgs>(args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Community that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityFindFirstArgs>(args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityFindManyArgs>(args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
     */
    create<T extends CommunityCreateArgs>(args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communities.
     * @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityCreateManyArgs>(args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communities and returns the data saved in the database.
     * @param {CommunityCreateManyAndReturnArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
     */
    delete<T extends CommunityDeleteArgs>(args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityUpdateArgs>(args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityDeleteManyArgs>(args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityUpdateManyArgs>(args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities and returns the data updated in the database.
     * @param {CommunityUpdateManyAndReturnArgs} args - Arguments to update many Communities.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CommunityUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
     */
    upsert<T extends CommunityUpsertArgs>(args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
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
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tzadikim<T extends Community$tzadikimArgs<ExtArgs> = {}>(args?: Subset<T, Community$tzadikimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TzadikPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Community model
   */
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'Int'>
    readonly name: FieldRef<"Community", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }

  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Community createManyAndReturn
   */
  export type CommunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
  }

  /**
   * Community updateManyAndReturn
   */
  export type CommunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
  }

  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }

  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to delete.
     */
    limit?: number
  }

  /**
   * Community.tzadikim
   */
  export type Community$tzadikimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tzadik
     */
    select?: TzadikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tzadik
     */
    omit?: TzadikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TzadikInclude<ExtArgs> | null
    where?: TzadikWhereInput
    orderBy?: TzadikOrderByWithRelationInput | TzadikOrderByWithRelationInput[]
    cursor?: TzadikWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TzadikScalarFieldEnum | TzadikScalarFieldEnum[]
  }

  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
  }


  /**
   * Model Tzadik
   */

  export type AggregateTzadik = {
    _count: TzadikCountAggregateOutputType | null
    _avg: TzadikAvgAggregateOutputType | null
    _sum: TzadikSumAggregateOutputType | null
    _min: TzadikMinAggregateOutputType | null
    _max: TzadikMaxAggregateOutputType | null
  }

  export type TzadikAvgAggregateOutputType = {
    id: number | null
    communityId: number | null
    location: number | null
  }

  export type TzadikSumAggregateOutputType = {
    id: number | null
    communityId: number | null
    location: number[]
  }

  export type TzadikMinAggregateOutputType = {
    id: number | null
    name: string | null
    gender: $Enums.Gender | null
    communityId: number | null
    birthDate: Date | null
    deathDate: Date | null
    descriptionPlace: string | null
    mainImage: string | null
    country: string | null
    city: string | null
  }

  export type TzadikMaxAggregateOutputType = {
    id: number | null
    name: string | null
    gender: $Enums.Gender | null
    communityId: number | null
    birthDate: Date | null
    deathDate: Date | null
    descriptionPlace: string | null
    mainImage: string | null
    country: string | null
    city: string | null
  }

  export type TzadikCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    communityId: number
    birthDate: number
    deathDate: number
    location: number
    descriptionPlace: number
    mainImage: number
    images: number
    biography: number
    article: number
    books: number
    country: number
    city: number
    _all: number
  }


  export type TzadikAvgAggregateInputType = {
    id?: true
    communityId?: true
    location?: true
  }

  export type TzadikSumAggregateInputType = {
    id?: true
    communityId?: true
    location?: true
  }

  export type TzadikMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    communityId?: true
    birthDate?: true
    deathDate?: true
    descriptionPlace?: true
    mainImage?: true
    country?: true
    city?: true
  }

  export type TzadikMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    communityId?: true
    birthDate?: true
    deathDate?: true
    descriptionPlace?: true
    mainImage?: true
    country?: true
    city?: true
  }

  export type TzadikCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    communityId?: true
    birthDate?: true
    deathDate?: true
    location?: true
    descriptionPlace?: true
    mainImage?: true
    images?: true
    biography?: true
    article?: true
    books?: true
    country?: true
    city?: true
    _all?: true
  }

  export type TzadikAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tzadik to aggregate.
     */
    where?: TzadikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tzadiks to fetch.
     */
    orderBy?: TzadikOrderByWithRelationInput | TzadikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TzadikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tzadiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tzadiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tzadiks
    **/
    _count?: true | TzadikCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TzadikAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TzadikSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TzadikMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TzadikMaxAggregateInputType
  }

  export type GetTzadikAggregateType<T extends TzadikAggregateArgs> = {
        [P in keyof T & keyof AggregateTzadik]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTzadik[P]>
      : GetScalarType<T[P], AggregateTzadik[P]>
  }




  export type TzadikGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TzadikWhereInput
    orderBy?: TzadikOrderByWithAggregationInput | TzadikOrderByWithAggregationInput[]
    by: TzadikScalarFieldEnum[] | TzadikScalarFieldEnum
    having?: TzadikScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TzadikCountAggregateInputType | true
    _avg?: TzadikAvgAggregateInputType
    _sum?: TzadikSumAggregateInputType
    _min?: TzadikMinAggregateInputType
    _max?: TzadikMaxAggregateInputType
  }

  export type TzadikGroupByOutputType = {
    id: number
    name: string
    gender: $Enums.Gender
    communityId: number | null
    birthDate: Date | null
    deathDate: Date | null
    location: number[]
    descriptionPlace: string | null
    mainImage: string | null
    images: string[]
    biography: string[]
    article: string[]
    books: string[]
    country: string | null
    city: string | null
    _count: TzadikCountAggregateOutputType | null
    _avg: TzadikAvgAggregateOutputType | null
    _sum: TzadikSumAggregateOutputType | null
    _min: TzadikMinAggregateOutputType | null
    _max: TzadikMaxAggregateOutputType | null
  }

  type GetTzadikGroupByPayload<T extends TzadikGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TzadikGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TzadikGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TzadikGroupByOutputType[P]>
            : GetScalarType<T[P], TzadikGroupByOutputType[P]>
        }
      >
    >


  export type TzadikSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    communityId?: boolean
    birthDate?: boolean
    deathDate?: boolean
    location?: boolean
    descriptionPlace?: boolean
    mainImage?: boolean
    images?: boolean
    biography?: boolean
    article?: boolean
    books?: boolean
    country?: boolean
    city?: boolean
    community?: boolean | Tzadik$communityArgs<ExtArgs>
  }, ExtArgs["result"]["tzadik"]>

  export type TzadikSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    communityId?: boolean
    birthDate?: boolean
    deathDate?: boolean
    location?: boolean
    descriptionPlace?: boolean
    mainImage?: boolean
    images?: boolean
    biography?: boolean
    article?: boolean
    books?: boolean
    country?: boolean
    city?: boolean
    community?: boolean | Tzadik$communityArgs<ExtArgs>
  }, ExtArgs["result"]["tzadik"]>

  export type TzadikSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    communityId?: boolean
    birthDate?: boolean
    deathDate?: boolean
    location?: boolean
    descriptionPlace?: boolean
    mainImage?: boolean
    images?: boolean
    biography?: boolean
    article?: boolean
    books?: boolean
    country?: boolean
    city?: boolean
    community?: boolean | Tzadik$communityArgs<ExtArgs>
  }, ExtArgs["result"]["tzadik"]>

  export type TzadikSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    communityId?: boolean
    birthDate?: boolean
    deathDate?: boolean
    location?: boolean
    descriptionPlace?: boolean
    mainImage?: boolean
    images?: boolean
    biography?: boolean
    article?: boolean
    books?: boolean
    country?: boolean
    city?: boolean
  }

  export type TzadikOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gender" | "communityId" | "birthDate" | "deathDate" | "location" | "descriptionPlace" | "mainImage" | "images" | "biography" | "article" | "books" | "country" | "city", ExtArgs["result"]["tzadik"]>
  export type TzadikInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | Tzadik$communityArgs<ExtArgs>
  }
  export type TzadikIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | Tzadik$communityArgs<ExtArgs>
  }
  export type TzadikIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | Tzadik$communityArgs<ExtArgs>
  }

  export type $TzadikPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tzadik"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      gender: $Enums.Gender
      communityId: number | null
      birthDate: Date | null
      deathDate: Date | null
      location: number[]
      descriptionPlace: string | null
      mainImage: string | null
      images: string[]
      biography: string[]
      article: string[]
      books: string[]
      country: string | null
      city: string | null
    }, ExtArgs["result"]["tzadik"]>
    composites: {}
  }

  type TzadikGetPayload<S extends boolean | null | undefined | TzadikDefaultArgs> = $Result.GetResult<Prisma.$TzadikPayload, S>

  type TzadikCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TzadikFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TzadikCountAggregateInputType | true
    }

  export interface TzadikDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tzadik'], meta: { name: 'Tzadik' } }
    /**
     * Find zero or one Tzadik that matches the filter.
     * @param {TzadikFindUniqueArgs} args - Arguments to find a Tzadik
     * @example
     * // Get one Tzadik
     * const tzadik = await prisma.tzadik.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TzadikFindUniqueArgs>(args: SelectSubset<T, TzadikFindUniqueArgs<ExtArgs>>): Prisma__TzadikClient<$Result.GetResult<Prisma.$TzadikPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tzadik that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TzadikFindUniqueOrThrowArgs} args - Arguments to find a Tzadik
     * @example
     * // Get one Tzadik
     * const tzadik = await prisma.tzadik.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TzadikFindUniqueOrThrowArgs>(args: SelectSubset<T, TzadikFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TzadikClient<$Result.GetResult<Prisma.$TzadikPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tzadik that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TzadikFindFirstArgs} args - Arguments to find a Tzadik
     * @example
     * // Get one Tzadik
     * const tzadik = await prisma.tzadik.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TzadikFindFirstArgs>(args?: SelectSubset<T, TzadikFindFirstArgs<ExtArgs>>): Prisma__TzadikClient<$Result.GetResult<Prisma.$TzadikPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tzadik that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TzadikFindFirstOrThrowArgs} args - Arguments to find a Tzadik
     * @example
     * // Get one Tzadik
     * const tzadik = await prisma.tzadik.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TzadikFindFirstOrThrowArgs>(args?: SelectSubset<T, TzadikFindFirstOrThrowArgs<ExtArgs>>): Prisma__TzadikClient<$Result.GetResult<Prisma.$TzadikPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tzadiks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TzadikFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tzadiks
     * const tzadiks = await prisma.tzadik.findMany()
     * 
     * // Get first 10 Tzadiks
     * const tzadiks = await prisma.tzadik.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tzadikWithIdOnly = await prisma.tzadik.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TzadikFindManyArgs>(args?: SelectSubset<T, TzadikFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TzadikPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tzadik.
     * @param {TzadikCreateArgs} args - Arguments to create a Tzadik.
     * @example
     * // Create one Tzadik
     * const Tzadik = await prisma.tzadik.create({
     *   data: {
     *     // ... data to create a Tzadik
     *   }
     * })
     * 
     */
    create<T extends TzadikCreateArgs>(args: SelectSubset<T, TzadikCreateArgs<ExtArgs>>): Prisma__TzadikClient<$Result.GetResult<Prisma.$TzadikPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tzadiks.
     * @param {TzadikCreateManyArgs} args - Arguments to create many Tzadiks.
     * @example
     * // Create many Tzadiks
     * const tzadik = await prisma.tzadik.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TzadikCreateManyArgs>(args?: SelectSubset<T, TzadikCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tzadiks and returns the data saved in the database.
     * @param {TzadikCreateManyAndReturnArgs} args - Arguments to create many Tzadiks.
     * @example
     * // Create many Tzadiks
     * const tzadik = await prisma.tzadik.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tzadiks and only return the `id`
     * const tzadikWithIdOnly = await prisma.tzadik.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TzadikCreateManyAndReturnArgs>(args?: SelectSubset<T, TzadikCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TzadikPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tzadik.
     * @param {TzadikDeleteArgs} args - Arguments to delete one Tzadik.
     * @example
     * // Delete one Tzadik
     * const Tzadik = await prisma.tzadik.delete({
     *   where: {
     *     // ... filter to delete one Tzadik
     *   }
     * })
     * 
     */
    delete<T extends TzadikDeleteArgs>(args: SelectSubset<T, TzadikDeleteArgs<ExtArgs>>): Prisma__TzadikClient<$Result.GetResult<Prisma.$TzadikPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tzadik.
     * @param {TzadikUpdateArgs} args - Arguments to update one Tzadik.
     * @example
     * // Update one Tzadik
     * const tzadik = await prisma.tzadik.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TzadikUpdateArgs>(args: SelectSubset<T, TzadikUpdateArgs<ExtArgs>>): Prisma__TzadikClient<$Result.GetResult<Prisma.$TzadikPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tzadiks.
     * @param {TzadikDeleteManyArgs} args - Arguments to filter Tzadiks to delete.
     * @example
     * // Delete a few Tzadiks
     * const { count } = await prisma.tzadik.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TzadikDeleteManyArgs>(args?: SelectSubset<T, TzadikDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tzadiks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TzadikUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tzadiks
     * const tzadik = await prisma.tzadik.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TzadikUpdateManyArgs>(args: SelectSubset<T, TzadikUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tzadiks and returns the data updated in the database.
     * @param {TzadikUpdateManyAndReturnArgs} args - Arguments to update many Tzadiks.
     * @example
     * // Update many Tzadiks
     * const tzadik = await prisma.tzadik.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tzadiks and only return the `id`
     * const tzadikWithIdOnly = await prisma.tzadik.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TzadikUpdateManyAndReturnArgs>(args: SelectSubset<T, TzadikUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TzadikPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tzadik.
     * @param {TzadikUpsertArgs} args - Arguments to update or create a Tzadik.
     * @example
     * // Update or create a Tzadik
     * const tzadik = await prisma.tzadik.upsert({
     *   create: {
     *     // ... data to create a Tzadik
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tzadik we want to update
     *   }
     * })
     */
    upsert<T extends TzadikUpsertArgs>(args: SelectSubset<T, TzadikUpsertArgs<ExtArgs>>): Prisma__TzadikClient<$Result.GetResult<Prisma.$TzadikPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tzadiks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TzadikCountArgs} args - Arguments to filter Tzadiks to count.
     * @example
     * // Count the number of Tzadiks
     * const count = await prisma.tzadik.count({
     *   where: {
     *     // ... the filter for the Tzadiks we want to count
     *   }
     * })
    **/
    count<T extends TzadikCountArgs>(
      args?: Subset<T, TzadikCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TzadikCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tzadik.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TzadikAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TzadikAggregateArgs>(args: Subset<T, TzadikAggregateArgs>): Prisma.PrismaPromise<GetTzadikAggregateType<T>>

    /**
     * Group by Tzadik.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TzadikGroupByArgs} args - Group by arguments.
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
      T extends TzadikGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TzadikGroupByArgs['orderBy'] }
        : { orderBy?: TzadikGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TzadikGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTzadikGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tzadik model
   */
  readonly fields: TzadikFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tzadik.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TzadikClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community<T extends Tzadik$communityArgs<ExtArgs> = {}>(args?: Subset<T, Tzadik$communityArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tzadik model
   */
  interface TzadikFieldRefs {
    readonly id: FieldRef<"Tzadik", 'Int'>
    readonly name: FieldRef<"Tzadik", 'String'>
    readonly gender: FieldRef<"Tzadik", 'Gender'>
    readonly communityId: FieldRef<"Tzadik", 'Int'>
    readonly birthDate: FieldRef<"Tzadik", 'DateTime'>
    readonly deathDate: FieldRef<"Tzadik", 'DateTime'>
    readonly location: FieldRef<"Tzadik", 'Float[]'>
    readonly descriptionPlace: FieldRef<"Tzadik", 'String'>
    readonly mainImage: FieldRef<"Tzadik", 'String'>
    readonly images: FieldRef<"Tzadik", 'String[]'>
    readonly biography: FieldRef<"Tzadik", 'String[]'>
    readonly article: FieldRef<"Tzadik", 'String[]'>
    readonly books: FieldRef<"Tzadik", 'String[]'>
    readonly country: FieldRef<"Tzadik", 'String'>
    readonly city: FieldRef<"Tzadik", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tzadik findUnique
   */
  export type TzadikFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tzadik
     */
    select?: TzadikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tzadik
     */
    omit?: TzadikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TzadikInclude<ExtArgs> | null
    /**
     * Filter, which Tzadik to fetch.
     */
    where: TzadikWhereUniqueInput
  }

  /**
   * Tzadik findUniqueOrThrow
   */
  export type TzadikFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tzadik
     */
    select?: TzadikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tzadik
     */
    omit?: TzadikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TzadikInclude<ExtArgs> | null
    /**
     * Filter, which Tzadik to fetch.
     */
    where: TzadikWhereUniqueInput
  }

  /**
   * Tzadik findFirst
   */
  export type TzadikFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tzadik
     */
    select?: TzadikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tzadik
     */
    omit?: TzadikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TzadikInclude<ExtArgs> | null
    /**
     * Filter, which Tzadik to fetch.
     */
    where?: TzadikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tzadiks to fetch.
     */
    orderBy?: TzadikOrderByWithRelationInput | TzadikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tzadiks.
     */
    cursor?: TzadikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tzadiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tzadiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tzadiks.
     */
    distinct?: TzadikScalarFieldEnum | TzadikScalarFieldEnum[]
  }

  /**
   * Tzadik findFirstOrThrow
   */
  export type TzadikFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tzadik
     */
    select?: TzadikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tzadik
     */
    omit?: TzadikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TzadikInclude<ExtArgs> | null
    /**
     * Filter, which Tzadik to fetch.
     */
    where?: TzadikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tzadiks to fetch.
     */
    orderBy?: TzadikOrderByWithRelationInput | TzadikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tzadiks.
     */
    cursor?: TzadikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tzadiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tzadiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tzadiks.
     */
    distinct?: TzadikScalarFieldEnum | TzadikScalarFieldEnum[]
  }

  /**
   * Tzadik findMany
   */
  export type TzadikFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tzadik
     */
    select?: TzadikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tzadik
     */
    omit?: TzadikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TzadikInclude<ExtArgs> | null
    /**
     * Filter, which Tzadiks to fetch.
     */
    where?: TzadikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tzadiks to fetch.
     */
    orderBy?: TzadikOrderByWithRelationInput | TzadikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tzadiks.
     */
    cursor?: TzadikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tzadiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tzadiks.
     */
    skip?: number
    distinct?: TzadikScalarFieldEnum | TzadikScalarFieldEnum[]
  }

  /**
   * Tzadik create
   */
  export type TzadikCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tzadik
     */
    select?: TzadikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tzadik
     */
    omit?: TzadikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TzadikInclude<ExtArgs> | null
    /**
     * The data needed to create a Tzadik.
     */
    data: XOR<TzadikCreateInput, TzadikUncheckedCreateInput>
  }

  /**
   * Tzadik createMany
   */
  export type TzadikCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tzadiks.
     */
    data: TzadikCreateManyInput | TzadikCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tzadik createManyAndReturn
   */
  export type TzadikCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tzadik
     */
    select?: TzadikSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tzadik
     */
    omit?: TzadikOmit<ExtArgs> | null
    /**
     * The data used to create many Tzadiks.
     */
    data: TzadikCreateManyInput | TzadikCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TzadikIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tzadik update
   */
  export type TzadikUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tzadik
     */
    select?: TzadikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tzadik
     */
    omit?: TzadikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TzadikInclude<ExtArgs> | null
    /**
     * The data needed to update a Tzadik.
     */
    data: XOR<TzadikUpdateInput, TzadikUncheckedUpdateInput>
    /**
     * Choose, which Tzadik to update.
     */
    where: TzadikWhereUniqueInput
  }

  /**
   * Tzadik updateMany
   */
  export type TzadikUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tzadiks.
     */
    data: XOR<TzadikUpdateManyMutationInput, TzadikUncheckedUpdateManyInput>
    /**
     * Filter which Tzadiks to update
     */
    where?: TzadikWhereInput
    /**
     * Limit how many Tzadiks to update.
     */
    limit?: number
  }

  /**
   * Tzadik updateManyAndReturn
   */
  export type TzadikUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tzadik
     */
    select?: TzadikSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tzadik
     */
    omit?: TzadikOmit<ExtArgs> | null
    /**
     * The data used to update Tzadiks.
     */
    data: XOR<TzadikUpdateManyMutationInput, TzadikUncheckedUpdateManyInput>
    /**
     * Filter which Tzadiks to update
     */
    where?: TzadikWhereInput
    /**
     * Limit how many Tzadiks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TzadikIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tzadik upsert
   */
  export type TzadikUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tzadik
     */
    select?: TzadikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tzadik
     */
    omit?: TzadikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TzadikInclude<ExtArgs> | null
    /**
     * The filter to search for the Tzadik to update in case it exists.
     */
    where: TzadikWhereUniqueInput
    /**
     * In case the Tzadik found by the `where` argument doesn't exist, create a new Tzadik with this data.
     */
    create: XOR<TzadikCreateInput, TzadikUncheckedCreateInput>
    /**
     * In case the Tzadik was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TzadikUpdateInput, TzadikUncheckedUpdateInput>
  }

  /**
   * Tzadik delete
   */
  export type TzadikDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tzadik
     */
    select?: TzadikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tzadik
     */
    omit?: TzadikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TzadikInclude<ExtArgs> | null
    /**
     * Filter which Tzadik to delete.
     */
    where: TzadikWhereUniqueInput
  }

  /**
   * Tzadik deleteMany
   */
  export type TzadikDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tzadiks to delete
     */
    where?: TzadikWhereInput
    /**
     * Limit how many Tzadiks to delete.
     */
    limit?: number
  }

  /**
   * Tzadik.community
   */
  export type Tzadik$communityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
  }

  /**
   * Tzadik without action
   */
  export type TzadikDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tzadik
     */
    select?: TzadikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tzadik
     */
    omit?: TzadikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TzadikInclude<ExtArgs> | null
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


  export const CommunityScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const TzadikScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    communityId: 'communityId',
    birthDate: 'birthDate',
    deathDate: 'deathDate',
    location: 'location',
    descriptionPlace: 'descriptionPlace',
    mainImage: 'mainImage',
    images: 'images',
    biography: 'biography',
    article: 'article',
    books: 'books',
    country: 'country',
    city: 'city'
  };

  export type TzadikScalarFieldEnum = (typeof TzadikScalarFieldEnum)[keyof typeof TzadikScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: IntFilter<"Community"> | number
    name?: StringFilter<"Community"> | string
    tzadikim?: TzadikListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tzadikim?: TzadikOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    tzadikim?: TzadikListRelationFilter
  }, "id" | "name">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _avg?: CommunityAvgOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
    _sum?: CommunitySumOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Community"> | number
    name?: StringWithAggregatesFilter<"Community"> | string
  }

  export type TzadikWhereInput = {
    AND?: TzadikWhereInput | TzadikWhereInput[]
    OR?: TzadikWhereInput[]
    NOT?: TzadikWhereInput | TzadikWhereInput[]
    id?: IntFilter<"Tzadik"> | number
    name?: StringFilter<"Tzadik"> | string
    gender?: EnumGenderFilter<"Tzadik"> | $Enums.Gender
    communityId?: IntNullableFilter<"Tzadik"> | number | null
    birthDate?: DateTimeNullableFilter<"Tzadik"> | Date | string | null
    deathDate?: DateTimeNullableFilter<"Tzadik"> | Date | string | null
    location?: FloatNullableListFilter<"Tzadik">
    descriptionPlace?: StringNullableFilter<"Tzadik"> | string | null
    mainImage?: StringNullableFilter<"Tzadik"> | string | null
    images?: StringNullableListFilter<"Tzadik">
    biography?: StringNullableListFilter<"Tzadik">
    article?: StringNullableListFilter<"Tzadik">
    books?: StringNullableListFilter<"Tzadik">
    country?: StringNullableFilter<"Tzadik"> | string | null
    city?: StringNullableFilter<"Tzadik"> | string | null
    community?: XOR<CommunityNullableScalarRelationFilter, CommunityWhereInput> | null
  }

  export type TzadikOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    communityId?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    deathDate?: SortOrderInput | SortOrder
    location?: SortOrder
    descriptionPlace?: SortOrderInput | SortOrder
    mainImage?: SortOrderInput | SortOrder
    images?: SortOrder
    biography?: SortOrder
    article?: SortOrder
    books?: SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    community?: CommunityOrderByWithRelationInput
  }

  export type TzadikWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TzadikWhereInput | TzadikWhereInput[]
    OR?: TzadikWhereInput[]
    NOT?: TzadikWhereInput | TzadikWhereInput[]
    name?: StringFilter<"Tzadik"> | string
    gender?: EnumGenderFilter<"Tzadik"> | $Enums.Gender
    communityId?: IntNullableFilter<"Tzadik"> | number | null
    birthDate?: DateTimeNullableFilter<"Tzadik"> | Date | string | null
    deathDate?: DateTimeNullableFilter<"Tzadik"> | Date | string | null
    location?: FloatNullableListFilter<"Tzadik">
    descriptionPlace?: StringNullableFilter<"Tzadik"> | string | null
    mainImage?: StringNullableFilter<"Tzadik"> | string | null
    images?: StringNullableListFilter<"Tzadik">
    biography?: StringNullableListFilter<"Tzadik">
    article?: StringNullableListFilter<"Tzadik">
    books?: StringNullableListFilter<"Tzadik">
    country?: StringNullableFilter<"Tzadik"> | string | null
    city?: StringNullableFilter<"Tzadik"> | string | null
    community?: XOR<CommunityNullableScalarRelationFilter, CommunityWhereInput> | null
  }, "id">

  export type TzadikOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    communityId?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    deathDate?: SortOrderInput | SortOrder
    location?: SortOrder
    descriptionPlace?: SortOrderInput | SortOrder
    mainImage?: SortOrderInput | SortOrder
    images?: SortOrder
    biography?: SortOrder
    article?: SortOrder
    books?: SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    _count?: TzadikCountOrderByAggregateInput
    _avg?: TzadikAvgOrderByAggregateInput
    _max?: TzadikMaxOrderByAggregateInput
    _min?: TzadikMinOrderByAggregateInput
    _sum?: TzadikSumOrderByAggregateInput
  }

  export type TzadikScalarWhereWithAggregatesInput = {
    AND?: TzadikScalarWhereWithAggregatesInput | TzadikScalarWhereWithAggregatesInput[]
    OR?: TzadikScalarWhereWithAggregatesInput[]
    NOT?: TzadikScalarWhereWithAggregatesInput | TzadikScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tzadik"> | number
    name?: StringWithAggregatesFilter<"Tzadik"> | string
    gender?: EnumGenderWithAggregatesFilter<"Tzadik"> | $Enums.Gender
    communityId?: IntNullableWithAggregatesFilter<"Tzadik"> | number | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Tzadik"> | Date | string | null
    deathDate?: DateTimeNullableWithAggregatesFilter<"Tzadik"> | Date | string | null
    location?: FloatNullableListFilter<"Tzadik">
    descriptionPlace?: StringNullableWithAggregatesFilter<"Tzadik"> | string | null
    mainImage?: StringNullableWithAggregatesFilter<"Tzadik"> | string | null
    images?: StringNullableListFilter<"Tzadik">
    biography?: StringNullableListFilter<"Tzadik">
    article?: StringNullableListFilter<"Tzadik">
    books?: StringNullableListFilter<"Tzadik">
    country?: StringNullableWithAggregatesFilter<"Tzadik"> | string | null
    city?: StringNullableWithAggregatesFilter<"Tzadik"> | string | null
  }

  export type CommunityCreateInput = {
    name: string
    tzadikim?: TzadikCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: number
    name: string
    tzadikim?: TzadikUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tzadikim?: TzadikUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tzadikim?: TzadikUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateManyInput = {
    id?: number
    name: string
  }

  export type CommunityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TzadikCreateInput = {
    name: string
    gender?: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    location?: TzadikCreatelocationInput | number[]
    descriptionPlace?: string | null
    mainImage?: string | null
    images?: TzadikCreateimagesInput | string[]
    biography?: TzadikCreatebiographyInput | string[]
    article?: TzadikCreatearticleInput | string[]
    books?: TzadikCreatebooksInput | string[]
    country?: string | null
    city?: string | null
    community?: CommunityCreateNestedOneWithoutTzadikimInput
  }

  export type TzadikUncheckedCreateInput = {
    id?: number
    name: string
    gender?: $Enums.Gender
    communityId?: number | null
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    location?: TzadikCreatelocationInput | number[]
    descriptionPlace?: string | null
    mainImage?: string | null
    images?: TzadikCreateimagesInput | string[]
    biography?: TzadikCreatebiographyInput | string[]
    article?: TzadikCreatearticleInput | string[]
    books?: TzadikCreatebooksInput | string[]
    country?: string | null
    city?: string | null
  }

  export type TzadikUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: TzadikUpdatelocationInput | number[]
    descriptionPlace?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TzadikUpdateimagesInput | string[]
    biography?: TzadikUpdatebiographyInput | string[]
    article?: TzadikUpdatearticleInput | string[]
    books?: TzadikUpdatebooksInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    community?: CommunityUpdateOneWithoutTzadikimNestedInput
  }

  export type TzadikUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: TzadikUpdatelocationInput | number[]
    descriptionPlace?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TzadikUpdateimagesInput | string[]
    biography?: TzadikUpdatebiographyInput | string[]
    article?: TzadikUpdatearticleInput | string[]
    books?: TzadikUpdatebooksInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TzadikCreateManyInput = {
    id?: number
    name: string
    gender?: $Enums.Gender
    communityId?: number | null
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    location?: TzadikCreatelocationInput | number[]
    descriptionPlace?: string | null
    mainImage?: string | null
    images?: TzadikCreateimagesInput | string[]
    biography?: TzadikCreatebiographyInput | string[]
    article?: TzadikCreatearticleInput | string[]
    books?: TzadikCreatebooksInput | string[]
    country?: string | null
    city?: string | null
  }

  export type TzadikUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: TzadikUpdatelocationInput | number[]
    descriptionPlace?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TzadikUpdateimagesInput | string[]
    biography?: TzadikUpdatebiographyInput | string[]
    article?: TzadikUpdatearticleInput | string[]
    books?: TzadikUpdatebooksInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TzadikUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: TzadikUpdatelocationInput | number[]
    descriptionPlace?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TzadikUpdateimagesInput | string[]
    biography?: TzadikUpdatebiographyInput | string[]
    article?: TzadikUpdatearticleInput | string[]
    books?: TzadikUpdatebooksInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type TzadikListRelationFilter = {
    every?: TzadikWhereInput
    some?: TzadikWhereInput
    none?: TzadikWhereInput
  }

  export type TzadikOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CommunityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CommunitySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CommunityNullableScalarRelationFilter = {
    is?: CommunityWhereInput | null
    isNot?: CommunityWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TzadikCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    communityId?: SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrder
    location?: SortOrder
    descriptionPlace?: SortOrder
    mainImage?: SortOrder
    images?: SortOrder
    biography?: SortOrder
    article?: SortOrder
    books?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type TzadikAvgOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    location?: SortOrder
  }

  export type TzadikMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    communityId?: SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrder
    descriptionPlace?: SortOrder
    mainImage?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type TzadikMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    communityId?: SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrder
    descriptionPlace?: SortOrder
    mainImage?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type TzadikSumOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    location?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type TzadikCreateNestedManyWithoutCommunityInput = {
    create?: XOR<TzadikCreateWithoutCommunityInput, TzadikUncheckedCreateWithoutCommunityInput> | TzadikCreateWithoutCommunityInput[] | TzadikUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: TzadikCreateOrConnectWithoutCommunityInput | TzadikCreateOrConnectWithoutCommunityInput[]
    createMany?: TzadikCreateManyCommunityInputEnvelope
    connect?: TzadikWhereUniqueInput | TzadikWhereUniqueInput[]
  }

  export type TzadikUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<TzadikCreateWithoutCommunityInput, TzadikUncheckedCreateWithoutCommunityInput> | TzadikCreateWithoutCommunityInput[] | TzadikUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: TzadikCreateOrConnectWithoutCommunityInput | TzadikCreateOrConnectWithoutCommunityInput[]
    createMany?: TzadikCreateManyCommunityInputEnvelope
    connect?: TzadikWhereUniqueInput | TzadikWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TzadikUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<TzadikCreateWithoutCommunityInput, TzadikUncheckedCreateWithoutCommunityInput> | TzadikCreateWithoutCommunityInput[] | TzadikUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: TzadikCreateOrConnectWithoutCommunityInput | TzadikCreateOrConnectWithoutCommunityInput[]
    upsert?: TzadikUpsertWithWhereUniqueWithoutCommunityInput | TzadikUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: TzadikCreateManyCommunityInputEnvelope
    set?: TzadikWhereUniqueInput | TzadikWhereUniqueInput[]
    disconnect?: TzadikWhereUniqueInput | TzadikWhereUniqueInput[]
    delete?: TzadikWhereUniqueInput | TzadikWhereUniqueInput[]
    connect?: TzadikWhereUniqueInput | TzadikWhereUniqueInput[]
    update?: TzadikUpdateWithWhereUniqueWithoutCommunityInput | TzadikUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: TzadikUpdateManyWithWhereWithoutCommunityInput | TzadikUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: TzadikScalarWhereInput | TzadikScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TzadikUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<TzadikCreateWithoutCommunityInput, TzadikUncheckedCreateWithoutCommunityInput> | TzadikCreateWithoutCommunityInput[] | TzadikUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: TzadikCreateOrConnectWithoutCommunityInput | TzadikCreateOrConnectWithoutCommunityInput[]
    upsert?: TzadikUpsertWithWhereUniqueWithoutCommunityInput | TzadikUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: TzadikCreateManyCommunityInputEnvelope
    set?: TzadikWhereUniqueInput | TzadikWhereUniqueInput[]
    disconnect?: TzadikWhereUniqueInput | TzadikWhereUniqueInput[]
    delete?: TzadikWhereUniqueInput | TzadikWhereUniqueInput[]
    connect?: TzadikWhereUniqueInput | TzadikWhereUniqueInput[]
    update?: TzadikUpdateWithWhereUniqueWithoutCommunityInput | TzadikUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: TzadikUpdateManyWithWhereWithoutCommunityInput | TzadikUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: TzadikScalarWhereInput | TzadikScalarWhereInput[]
  }

  export type TzadikCreatelocationInput = {
    set: number[]
  }

  export type TzadikCreateimagesInput = {
    set: string[]
  }

  export type TzadikCreatebiographyInput = {
    set: string[]
  }

  export type TzadikCreatearticleInput = {
    set: string[]
  }

  export type TzadikCreatebooksInput = {
    set: string[]
  }

  export type CommunityCreateNestedOneWithoutTzadikimInput = {
    create?: XOR<CommunityCreateWithoutTzadikimInput, CommunityUncheckedCreateWithoutTzadikimInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutTzadikimInput
    connect?: CommunityWhereUniqueInput
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TzadikUpdatelocationInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TzadikUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TzadikUpdatebiographyInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TzadikUpdatearticleInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TzadikUpdatebooksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CommunityUpdateOneWithoutTzadikimNestedInput = {
    create?: XOR<CommunityCreateWithoutTzadikimInput, CommunityUncheckedCreateWithoutTzadikimInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutTzadikimInput
    upsert?: CommunityUpsertWithoutTzadikimInput
    disconnect?: CommunityWhereInput | boolean
    delete?: CommunityWhereInput | boolean
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutTzadikimInput, CommunityUpdateWithoutTzadikimInput>, CommunityUncheckedUpdateWithoutTzadikimInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type TzadikCreateWithoutCommunityInput = {
    name: string
    gender?: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    location?: TzadikCreatelocationInput | number[]
    descriptionPlace?: string | null
    mainImage?: string | null
    images?: TzadikCreateimagesInput | string[]
    biography?: TzadikCreatebiographyInput | string[]
    article?: TzadikCreatearticleInput | string[]
    books?: TzadikCreatebooksInput | string[]
    country?: string | null
    city?: string | null
  }

  export type TzadikUncheckedCreateWithoutCommunityInput = {
    id?: number
    name: string
    gender?: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    location?: TzadikCreatelocationInput | number[]
    descriptionPlace?: string | null
    mainImage?: string | null
    images?: TzadikCreateimagesInput | string[]
    biography?: TzadikCreatebiographyInput | string[]
    article?: TzadikCreatearticleInput | string[]
    books?: TzadikCreatebooksInput | string[]
    country?: string | null
    city?: string | null
  }

  export type TzadikCreateOrConnectWithoutCommunityInput = {
    where: TzadikWhereUniqueInput
    create: XOR<TzadikCreateWithoutCommunityInput, TzadikUncheckedCreateWithoutCommunityInput>
  }

  export type TzadikCreateManyCommunityInputEnvelope = {
    data: TzadikCreateManyCommunityInput | TzadikCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type TzadikUpsertWithWhereUniqueWithoutCommunityInput = {
    where: TzadikWhereUniqueInput
    update: XOR<TzadikUpdateWithoutCommunityInput, TzadikUncheckedUpdateWithoutCommunityInput>
    create: XOR<TzadikCreateWithoutCommunityInput, TzadikUncheckedCreateWithoutCommunityInput>
  }

  export type TzadikUpdateWithWhereUniqueWithoutCommunityInput = {
    where: TzadikWhereUniqueInput
    data: XOR<TzadikUpdateWithoutCommunityInput, TzadikUncheckedUpdateWithoutCommunityInput>
  }

  export type TzadikUpdateManyWithWhereWithoutCommunityInput = {
    where: TzadikScalarWhereInput
    data: XOR<TzadikUpdateManyMutationInput, TzadikUncheckedUpdateManyWithoutCommunityInput>
  }

  export type TzadikScalarWhereInput = {
    AND?: TzadikScalarWhereInput | TzadikScalarWhereInput[]
    OR?: TzadikScalarWhereInput[]
    NOT?: TzadikScalarWhereInput | TzadikScalarWhereInput[]
    id?: IntFilter<"Tzadik"> | number
    name?: StringFilter<"Tzadik"> | string
    gender?: EnumGenderFilter<"Tzadik"> | $Enums.Gender
    communityId?: IntNullableFilter<"Tzadik"> | number | null
    birthDate?: DateTimeNullableFilter<"Tzadik"> | Date | string | null
    deathDate?: DateTimeNullableFilter<"Tzadik"> | Date | string | null
    location?: FloatNullableListFilter<"Tzadik">
    descriptionPlace?: StringNullableFilter<"Tzadik"> | string | null
    mainImage?: StringNullableFilter<"Tzadik"> | string | null
    images?: StringNullableListFilter<"Tzadik">
    biography?: StringNullableListFilter<"Tzadik">
    article?: StringNullableListFilter<"Tzadik">
    books?: StringNullableListFilter<"Tzadik">
    country?: StringNullableFilter<"Tzadik"> | string | null
    city?: StringNullableFilter<"Tzadik"> | string | null
  }

  export type CommunityCreateWithoutTzadikimInput = {
    name: string
  }

  export type CommunityUncheckedCreateWithoutTzadikimInput = {
    id?: number
    name: string
  }

  export type CommunityCreateOrConnectWithoutTzadikimInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutTzadikimInput, CommunityUncheckedCreateWithoutTzadikimInput>
  }

  export type CommunityUpsertWithoutTzadikimInput = {
    update: XOR<CommunityUpdateWithoutTzadikimInput, CommunityUncheckedUpdateWithoutTzadikimInput>
    create: XOR<CommunityCreateWithoutTzadikimInput, CommunityUncheckedCreateWithoutTzadikimInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutTzadikimInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutTzadikimInput, CommunityUncheckedUpdateWithoutTzadikimInput>
  }

  export type CommunityUpdateWithoutTzadikimInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CommunityUncheckedUpdateWithoutTzadikimInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TzadikCreateManyCommunityInput = {
    id?: number
    name: string
    gender?: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    location?: TzadikCreatelocationInput | number[]
    descriptionPlace?: string | null
    mainImage?: string | null
    images?: TzadikCreateimagesInput | string[]
    biography?: TzadikCreatebiographyInput | string[]
    article?: TzadikCreatearticleInput | string[]
    books?: TzadikCreatebooksInput | string[]
    country?: string | null
    city?: string | null
  }

  export type TzadikUpdateWithoutCommunityInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: TzadikUpdatelocationInput | number[]
    descriptionPlace?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TzadikUpdateimagesInput | string[]
    biography?: TzadikUpdatebiographyInput | string[]
    article?: TzadikUpdatearticleInput | string[]
    books?: TzadikUpdatebooksInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TzadikUncheckedUpdateWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: TzadikUpdatelocationInput | number[]
    descriptionPlace?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TzadikUpdateimagesInput | string[]
    biography?: TzadikUpdatebiographyInput | string[]
    article?: TzadikUpdatearticleInput | string[]
    books?: TzadikUpdatebooksInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TzadikUncheckedUpdateManyWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: TzadikUpdatelocationInput | number[]
    descriptionPlace?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TzadikUpdateimagesInput | string[]
    biography?: TzadikUpdatebiographyInput | string[]
    article?: TzadikUpdatearticleInput | string[]
    books?: TzadikUpdatebooksInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
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